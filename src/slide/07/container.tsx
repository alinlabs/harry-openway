import { useState } from 'react';
import {
  SLIDE07_DATA,
  Language,
  CoreStackLayer,
  GrowthPillar
} from './data';

export interface Slide07Controller {
  header: typeof SLIDE07_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  frameworkTitle: string;
  layers: CoreStackLayer[];
  metrics: typeof SLIDE07_DATA['IN']['metrics'];
  pillars: GrowthPillar[];
  takeaway: typeof SLIDE07_DATA['IN']['takeaway'];
  activeLayerIndex: number;
  setActiveLayerIndex: (index: number) => void;
}

export function useSlide07Container(language: Language = 'IN'): Slide07Controller {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const data = SLIDE07_DATA[language] || SLIDE07_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    frameworkTitle: data.frameworkTitle,
    layers: data.layers,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeLayerIndex,
    setActiveLayerIndex
  };
}
