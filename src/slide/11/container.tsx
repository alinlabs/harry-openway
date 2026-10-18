import { useState } from 'react';
import {
  SLIDE11_DATA,
  Language,
  ExecutionPhase,
  RoadmapPillar
} from './data';

export interface Slide11Controller {
  header: typeof SLIDE11_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  phasesTitle: string;
  phases: ExecutionPhase[];
  metrics: typeof SLIDE11_DATA['IN']['metrics'];
  pillars: RoadmapPillar[];
  takeaway: typeof SLIDE11_DATA['IN']['takeaway'];
  activePhaseIndex: number;
  setActivePhaseIndex: (index: number) => void;
}

export function useSlide11Container(language: Language = 'IN'): Slide11Controller {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const data = SLIDE11_DATA[language] || SLIDE11_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    phasesTitle: data.phasesTitle,
    phases: data.phases,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activePhaseIndex,
    setActivePhaseIndex
  };
}
