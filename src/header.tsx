import React from 'react';
import { Language } from './slide/slidesData';

export interface HeaderProps {
  currentSlideIndex?: number;
  totalSlides?: number;
  slideTitle?: string;
  category?: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  showNotes?: boolean;
  onToggleNotes?: () => void;
  onToggleOverview?: () => void;
  timerSeconds?: number;
  isTimerRunning?: boolean;
  onToggleTimer?: () => void;
  onResetTimer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 sm:px-10 md:px-16 lg:px-20 py-3 z-30 flex items-center justify-between gap-4 shrink-0 font-sans">
      {/* Left: Judul Utama & Sub Judul - Tanpa Card OW, By Harry Gultom abu tipis */}
      <div className="flex flex-col text-left">
        <h1 className="text-sm sm:text-base font-extrabold text-black tracking-tight leading-tight">
          PROFILE
        </h1>
        <p className="text-xs sm:text-sm font-normal text-slate-400 tracking-normal leading-tight mt-0.5">
          By Harry Gultom
        </p>
      </div>

      {/* Right: Tab Bahasa IN | EN (Tanpa Icon Zoom In/Out) */}
      <div className="flex items-center shrink-0">
        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            onClick={() => onLanguageChange('IN')}
            className={"px-3 py-1 rounded-md text-xs font-bold transition-all " + (
              language === 'IN'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            )}
            title="Bahasa Indonesia"
            aria-label="Pilih Bahasa Indonesia"
          >
            IN
          </button>
          <span className="text-slate-300 px-1 text-xs select-none font-light">|</span>
          <button
            onClick={() => onLanguageChange('EN')}
            className={"px-3 py-1 rounded-md text-xs font-bold transition-all " + (
              language === 'EN'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            )}
            title="English Language"
            aria-label="Select English Language"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
