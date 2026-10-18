import { useState } from 'react';
import {
  SLIDE19_DATA,
  Language,
  BattlecardTactic,
  TacticalPillar
} from './data';

export interface Slide19Controller {
  header: typeof SLIDE19_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  tacticsTitle: string;
  tactics: BattlecardTactic[];
  metrics: typeof SLIDE19_DATA['IN']['metrics'];
  pillars: TacticalPillar[];
  takeaway: typeof SLIDE19_DATA['IN']['takeaway'];
  activeTacticIndex: number;
  setActiveTacticIndex: (index: number) => void;
}

export function useSlide19Container(language: Language = 'IN'): Slide19Controller {
  const [activeTacticIndex, setActiveTacticIndex] = useState<number>(0);
  const data = SLIDE19_DATA[language] || SLIDE19_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    tacticsTitle: data.tacticsTitle,
    tactics: data.tactics,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeTacticIndex,
    setActiveTacticIndex
  };
}
