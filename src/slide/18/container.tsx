import { useState } from 'react';
import { SLIDE18_DATA, Language } from './data';

export const useSlide18Container = (language: Language = 'IN') => {
  const data = SLIDE18_DATA[language] || SLIDE18_DATA.IN;
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    cardsTitle: data.cardsTitle,
    cardsBadge: data.cardsBadge,
    cards: data.cards,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCardIndex,
    setActiveCardIndex
  };
};
