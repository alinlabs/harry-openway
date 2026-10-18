import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';

export interface SlideAutoFitProps {
  children: React.ReactNode;
  activeSlideIndex?: number;
  language?: string;
  className?: string;
  /**
   * Maximum presentation width to prevent over-stretching on ultra-wide / 4K displays
   */
  maxCanvasWidth?: number;
}

/**
 * SlideAutoFit - True Device-Responsive Presentation Stage
 *
 * Designed to fit the user's device screen naturally:
 * 1. Fills 100% of the available stage width and height.
 * 2. On standard screens (laptops, desktops), renders at native 100% scale (no shrinking of text or elements).
 * 3. Expands across the full device width (up to maxCanvasWidth) with zero unwanted side-margins.
 * 4. Distributes vertical content evenly from top to bottom (Header, Middle Canvas, Pillars, Takeaway).
 * 5. If the screen is unusually short (height < required), applies a subtle, proportionate safety scale
 *    while preserving 100% container width so nothing is cut off.
 * 6. On mobile / small screens (< 768px), provides smooth native vertical flow with 100% legible text.
 */
export const SlideAutoFit: React.FC<SlideAutoFitProps> = ({
  children,
  activeSlideIndex = 0,
  language = 'IN',
  className = '',
  maxCanvasWidth = 1536,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [naturalHeight, setNaturalHeight] = useState(0);

  // 1. Measure Container (Available Viewport Stage)
  const updateContainerSize = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    if (clientWidth > 0 && clientHeight > 0) {
      setContainerSize((prev) => {
        if (Math.abs(prev.width - clientWidth) < 2 && Math.abs(prev.height - clientHeight) < 2) {
          return prev;
        }
        return { width: clientWidth, height: clientHeight };
      });
    }
  }, []);

  useLayoutEffect(() => {
    updateContainerSize();

    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      updateContainerSize();
    });
    observer.observe(containerRef.current);

    window.addEventListener('resize', updateContainerSize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateContainerSize);
    };
  }, [updateContainerSize]);

  // 2. Measure Intrinsic Natural Height of the Active Slide Content
  const measureSlideContentHeight = useCallback(() => {
    if (!contentRef.current) return 0;

    const slideRoot = contentRef.current.firstElementChild as HTMLElement;
    if (!slideRoot) return 0;

    // Direct children heights (Header, Canvas Grid, Value Pillars, Takeaway Bar)
    const childrenElements = Array.from(slideRoot.children) as HTMLElement[];
    let childrenTotalHeight = 0;

    if (childrenElements.length > 0) {
      for (const child of childrenElements) {
        const style = window.getComputedStyle(child);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;
        const childHeight = Math.max(child.scrollHeight, child.offsetHeight);
        childrenTotalHeight += childHeight + marginTop + marginBottom;
      }
    }

    const measuredH = Math.max(childrenTotalHeight, slideRoot.scrollHeight);
    return Math.ceil(measuredH);
  }, []);

  useLayoutEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const measuredH = measureSlideContentHeight();
      setNaturalHeight((prev) => {
        if (Math.abs(prev - measuredH) < 4) return prev;
        return measuredH;
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [activeSlideIndex, language, measureSlideContentHeight, containerSize]);

  const availableW = containerSize.width || (typeof window !== 'undefined' ? window.innerWidth : 1200);
  const availableH = containerSize.height || (typeof window !== 'undefined' ? window.innerHeight - 104 : 600);

  // Mobile viewport: provide responsive scrolling with 100% readable fonts
  const isMobile = availableW < 768;

  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full overflow-y-auto px-1 py-1 select-none bg-transparent ${className}`}
      >
        <div key={`slide-mobile-${activeSlideIndex}-${language}`} className="w-full min-h-full">
          {children}
        </div>
      </div>
    );
  }

  // Desktop / Laptop: True device-responsive layout
  // Scale down ONLY if content height strictly exceeds the stage height on very short screens
  const needsScaleDown = naturalHeight > 0 && naturalHeight > availableH;
  const scale = needsScaleDown ? Math.max(0.85, (availableH - 6) / naturalHeight) : 1.0;

  // If no scale down needed (99% of normal laptop & desktop screens):
  // Render full width, full height, native DOM resolution (NO transform: scale)!
  if (!needsScaleDown || scale >= 0.98) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full max-w-[${maxCanvasWidth}px] mx-auto flex flex-col justify-between overflow-hidden select-none bg-transparent ${className}`}
      >
        <div
          ref={contentRef}
          key={`slide-${activeSlideIndex}-${language}`}
          className="w-full h-full flex flex-col justify-between"
        >
          {children}
        </div>
      </div>
    );
  }

  // Fallback for unusually short viewports (e.g. netbook or cramped window height):
  // Preserves 100% container width, scaling down only vertically just enough to prevent clipping
  const scaledH = Math.round(naturalHeight * scale);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full max-w-[${maxCanvasWidth}px] mx-auto flex items-center justify-center overflow-hidden select-none bg-transparent ${className}`}
    >
      <div
        style={{
          width: '100%',
          height: `${scaledH}px`,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <div
          ref={contentRef}
          key={`slide-${activeSlideIndex}-${language}`}
          style={{
            width: '100%',
            height: `${naturalHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            position: 'absolute',
            top: 0,
            left: 0,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
          className="w-full flex flex-col justify-between"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideAutoFit;
