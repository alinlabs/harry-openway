import { useState } from 'react';
import { SLIDE13_DATA, Language } from './data';

export const useSlide13Container = (language: Language = 'IN') => {
  const data = SLIDE13_DATA[language] || SLIDE13_DATA.IN;
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
