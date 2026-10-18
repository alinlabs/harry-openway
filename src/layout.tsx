import React, { ReactNode } from 'react';
import Header, { HeaderProps } from './header';
import BottomNavigasi, { BottomNavigasiProps } from './bottomnavigasi';
import { X, BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { SlideMetadata } from './slide/slidesData';
import { SlideAutoFit } from './components/SlideAutoFit';

export interface LayoutProps {
  children: ReactNode;
  headerProps: HeaderProps;
  bottomNavProps: BottomNavigasiProps;
  showNotes: boolean;
  onCloseNotes: () => void;
  activeSlideData: SlideMetadata;
  showOverview: boolean;
  onCloseOverview: () => void;
  allSlides: SlideMetadata[];
  onSelectSlide: (index: number) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps,
  bottomNavProps,
  showNotes,
  onCloseNotes,
  activeSlideData,
  showOverview,
  onCloseOverview,
  allSlides,
  onSelectSlide
}) => {
  return (
    <div className="h-screen w-screen bg-white text-slate-800 flex flex-col justify-between overflow-hidden relative select-none font-sans">
      {/* Top Header - Always Fixed at Top */}
      <Header {...headerProps} />

      {/* Main Slide Presentation Stage: Truly responsive to device screen size without artificial shrinking */}
      <main className="flex-1 w-full px-3 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 overflow-hidden relative min-h-0 flex flex-col justify-center items-center bg-transparent">
        <SlideAutoFit
          activeSlideIndex={headerProps.currentSlideIndex}
          language={headerProps.language}
        >
          {children}
        </SlideAutoFit>
      </main>

      {/* Bottom Navigation - Always Fixed at Bottom */}
      <BottomNavigasi {...bottomNavProps} />

      {/* Speaker Notes Drawer (Offcanvas / Side Panel) - Bright Google Light Theme */}
      {showNotes && (
        <aside 
          className="fixed top-0 right-0 h-full w-full sm:w-96 md:w-[420px] bg-white/98 border-l border-slate-200 shadow-2xl z-50 p-4 flex flex-col justify-between backdrop-blur-xl animate-in slide-in-from-right duration-200"
        >
          <div className="overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {headerProps.language === 'IN' ? 'Catatan Pembicara (Harry Gultom)' : 'Speaker Notes (Harry Gultom)'}
                </h3>
              </div>
              <button
                onClick={onCloseNotes}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                title="Tutup (Esc / N)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-3 p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs">
              <div className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">
                Slide {activeSlideData.id} of {allSlides.length} • {activeSlideData.durationEstimate}
              </div>
              <div className="font-bold text-slate-900 mt-0.5 text-xs">{activeSlideData.title}</div>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                {headerProps.language === 'IN' ? 'Tujuan Strategis:' : 'Strategic Purpose:'}
              </div>
              <p className="text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 leading-relaxed">
                {activeSlideData.speakerNotes.purpose}
              </p>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                {headerProps.language === 'IN' ? 'Script / Poin Bicara Interview:' : 'Script / Key Talking Points:'}
              </div>
              <div className="space-y-1.5">
                {activeSlideData.speakerNotes.talkingPoints.map((point, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-800 leading-relaxed">
                    <span className="font-bold text-blue-600 mr-1.5">{idx + 1}.</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-1 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-amber-600" />
                {headerProps.language === 'IN' ? 'Antisipasi Pertanyaan Interviewer:' : 'Anticipated Interview Questions:'}
              </div>
              <div className="space-y-1.5">
                {activeSlideData.speakerNotes.potentialQuestions.map((q, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-950">
                    <strong className="text-amber-800 font-semibold">Q:</strong> "{q}"
                  </div>
                ))}
                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-[11px] text-emerald-950 mt-1">
                  <strong className="text-emerald-700 font-semibold block mb-0.5">
                    {headerProps.language === 'IN' ? 'Saran Jawaban:' : 'Suggested Answer:'}
                  </strong>
                  {activeSlideData.speakerNotes.suggestedAnswer}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 text-center text-[10px] text-slate-500">
            {headerProps.language === 'IN' ? 'Tekan N untuk buka/tutup' : 'Press N to toggle notes'}
          </div>
        </aside>
      )}

      {/* Overview Grid Modal */}
      {showOverview && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl p-4 sm:p-5 shadow-2xl max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {headerProps.language === 'IN' ? 'Daftar Slide Presentasi OpenWay' : 'OpenWay Presentation Slide Index'}
                </h3>
                <p className="text-[11px] text-slate-500">
                  {headerProps.language === 'IN' ? 'Klik pada salah satu slide untuk melompat seketika' : 'Click on any slide to navigate directly'}
                </p>
              </div>
              <button
                onClick={onCloseOverview}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                title="Tutup (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 overflow-y-auto p-1 max-h-[75vh]">
              {allSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(idx);
                    onCloseOverview();
                  }}
                  className={"p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between min-h-[95px] " + (
                    idx === headerProps.currentSlideIndex
                      ? 'bg-blue-50/90 border-blue-500 shadow-sm ring-2 ring-blue-500/20'
                      : 'bg-slate-50/80 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                      <span className="font-mono font-bold text-blue-600">#{String(slide.id).padStart(2, '0')}</span>
                      <span>{slide.durationEstimate}</span>
                    </div>
                    <h4 className="text-[11px] font-bold text-slate-900 leading-tight line-clamp-2">
                      {slide.title}
                    </h4>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-200/80 text-[9px] text-slate-500 flex items-center justify-between">
                    <span className="text-blue-700 font-medium truncate">{slide.category}</span>
                    {idx === headerProps.currentSlideIndex && (
                      <span className="text-emerald-600 font-bold">
                        {headerProps.language === 'IN' ? 'Aktif' : 'Active'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
