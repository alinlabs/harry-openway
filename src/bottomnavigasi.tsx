import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BottomNavigasiProps {
  currentSlideIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
  isAutoplay?: boolean;
  onToggleAutoplay?: () => void;
  slideTitles?: string[];
}

export const BottomNavigasi: React.FC<BottomNavigasiProps> = ({
  currentSlideIndex,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  isFirst,
  isLast
}) => {
  return (
    <nav className="w-full bg-white border-t border-slate-200 px-6 sm:px-10 md:px-16 lg:px-20 py-3 z-30 flex items-center justify-between gap-4 shrink-0 relative font-sans">
      {/* Left: Prev Button Only with Chevron */}
      <div className="flex items-center shrink-0">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            isFirst
              ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
              : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800 shadow-2xs active:scale-95'
          }`}
          title="Slide Sebelumnya (⬅)"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 text-slate-700" />
          <span>Prev</span>
        </button>
      </div>

      {/* Middle: Bullets Only (Active page marked with blue bullet) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-2 py-1 overflow-x-auto max-w-full">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={idx}
              onClick={() => onSelectSlide(idx)}
              title={`Slide ${idx + 1}`}
              aria-label={`Ke Slide ${idx + 1}`}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'w-5 h-2.5 sm:w-6 sm:h-2.5 bg-blue-600 shadow-xs ring-2 ring-blue-400/40'
                  : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          );
        })}
      </div>

      {/* Right: Next Button Only with Chevron */}
      <div className="flex items-center shrink-0">
        <button
          onClick={onNext}
          disabled={isLast}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold border transition-all ${
            isLast
              ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
              : 'bg-blue-600 hover:bg-blue-700 border-blue-700 text-white shadow-xs active:scale-95'
          }`}
          title="Slide Berikutnya (➡)"
          aria-label="Next Slide"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigasi;
