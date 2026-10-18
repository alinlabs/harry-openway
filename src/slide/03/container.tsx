import { useState } from 'react';
import {
  SLIDE03_DATA,
  Language,
  StakeholderTier,
  WinningPillar
} from './data';

export interface Slide03Controller {
  header: typeof SLIDE03_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  dossierTitle: string;
  tiers: StakeholderTier[];
  metrics: typeof SLIDE03_DATA['IN']['metrics'];
  pillars: WinningPillar[];
  takeaway: typeof SLIDE03_DATA['IN']['takeaway'];
  activeTierIndex: number;
  setActiveTierIndex: (index: number) => void;
}

export function useSlide03Container(language: Language = 'IN'): Slide03Controller {
  const [activeTierIndex, setActiveTierIndex] = useState<number>(0);
  const data = SLIDE03_DATA[language] || SLIDE03_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    dossierTitle: data.dossierTitle,
    tiers: data.tiers,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeTierIndex,
    setActiveTierIndex
  };
}
