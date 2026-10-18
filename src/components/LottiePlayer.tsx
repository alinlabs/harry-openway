import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

export interface LottiePlayerProps {
  src?: string; // Path to public lottie JSON e.g. "/assets/lottie/slide-17.json"
  animationData?: any; // Direct JSON object
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  speed?: number;
}

export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  src,
  animationData,
  loop = true,
  autoplay = true,
  className = 'w-full h-28',
  speed = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animInstanceRef = useRef<AnimationItem | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;

    try {
      setHasError(false);
      // Destroy existing instance if any
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
        animInstanceRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }

      const config: any = {
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay
      };

      if (animationData) {
        config.animationData = animationData;
      } else if (src) {
        config.path = src;
      }

      const anim = lottie.loadAnimation(config);
      anim.setSpeed(speed);
      animInstanceRef.current = anim;

      anim.addEventListener('data_failed', () => {
        if (isMounted) setHasError(true);
      });
      anim.addEventListener('error', () => {
        if (isMounted) setHasError(true);
      });
    } catch (err) {
      if (isMounted) setHasError(true);
    }

    return () => {
      isMounted = false;
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
        animInstanceRef.current = null;
      }
    };
  }, [src, animationData, loop, autoplay, speed]);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-slate-50/50 rounded-lg border border-slate-100 ${className}`}>
        <span className="text-[10px] text-slate-400 font-mono">3D Lottie Asset Active</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex items-center justify-center select-none ${className}`}
    />
  );
};

export default LottiePlayer;
