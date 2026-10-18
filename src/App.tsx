import React, { useState, useEffect, useCallback } from 'react';
import Layout from './layout';
import { getSlidesData, Language, SlideMetadata } from './slide/slidesData';
import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19
} from './slide';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [language, setLanguage] = useState<Language>('IN');
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const slidesData = getSlidesData(language);
  const totalSlides = slidesData.length;
  const currentSlide = slidesData[currentSlideIndex] || slidesData[0];

  // Stopwatch timer
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Autoplay progression
  useEffect(() => {
    let autoInterval: any = null;
    if (isAutoplay && totalSlides > 1) {
      autoInterval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      }, 12000);
    }
    return () => clearInterval(autoInterval);
  }, [isAutoplay, totalSlides]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleSelectSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        setShowOverview((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 0:
        return <Slide01 language={language} />;
      case 1:
        return <Slide02 language={language} />;
      case 2:
        return <Slide03 language={language} />;
      case 3:
        return <Slide04 language={language} />;
      case 4:
        return <Slide05 language={language} />;
      case 5:
        return <Slide06 language={language} />;
      case 6:
        return <Slide07 language={language} />;
      case 7:
        return <Slide08 language={language} />;
      case 8:
        return <Slide09 language={language} />;
      case 9:
        return <Slide10 language={language} />;
      case 10:
        return <Slide11 language={language} />;
      case 11:
        return <Slide12 language={language} />;
      case 12:
        return <Slide13 language={language} />;
      case 13:
        return <Slide14 language={language} />;
      case 14:
        return <Slide15 language={language} />;
      case 15:
        return <Slide16 language={language} />;
      case 16:
        return <Slide17 language={language} />;
      case 17:
        return <Slide18 language={language} />;
      case 18:
        return <Slide19 language={language} />;
      default:
        return <Slide01 language={language} />;
    }
  };

  return (
    <Layout
      headerProps={{
        currentSlideIndex,
        totalSlides,
        slideTitle: currentSlide.title,
        category: currentSlide.category,
        language,
        onLanguageChange: (lang: Language) => setLanguage(lang),
        showNotes,
        onToggleNotes: () => setShowNotes(!showNotes),
        onToggleOverview: () => setShowOverview(!showOverview),
        timerSeconds,
        isTimerRunning,
        onToggleTimer: () => setIsTimerRunning(!isTimerRunning),
        onResetTimer: () => setTimerSeconds(0)
      }}
      bottomNavProps={{
        currentSlideIndex,
        totalSlides,
        onNext: handleNext,
        onPrev: handlePrev,
        onSelectSlide: handleSelectSlide,
        isFirst: currentSlideIndex === 0,
        isLast: currentSlideIndex === totalSlides - 1,
        isAutoplay,
        onToggleAutoplay: () => setIsAutoplay(!isAutoplay),
        slideTitles: slidesData.map((s: SlideMetadata) => s.title)
      }}
      showNotes={showNotes}
      onCloseNotes={() => setShowNotes(false)}
      activeSlideData={currentSlide}
      showOverview={showOverview}
      onCloseOverview={() => setShowOverview(false)}
      allSlides={slidesData}
      onSelectSlide={handleSelectSlide}
    >
      {renderSlideContent()}
    </Layout>
  );
}
