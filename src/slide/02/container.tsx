import { useState } from 'react';
import {
  SLIDE02_DATA,
  INFRASTRUCTURE_HUBS,
  Language,
  CompetitorMetric,
  MarketPillar,
  InfrastructureHub
} from './data';

export interface Slide02Controller {
  header: {
    category: string;
    catalyst: string;
    title: string;
  };
  descriptionTitle: string;
  descriptionText: string;
  benchmarkLabels: {
    dimension: string;
    way4: string;
    legacy: string;
  };
  comparison: CompetitorMetric[];
  metrics: typeof SLIDE02_DATA['IN']['metrics'];
  hubs: InfrastructureHub[];
  pillars: MarketPillar[];
  takeaway: {
    proof: string;
    target: string;
  };
  activeHubIndex: number;
  setActiveHubIndex: (index: number) => void;
}

export function useSlide02Container(language: Language = 'IN'): Slide02Controller {
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0);
  const data = SLIDE02_DATA[language] || SLIDE02_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    benchmarkLabels: data.benchmarkLabels,
    comparison: data.comparison,
    metrics: data.metrics,
    hubs: INFRASTRUCTURE_HUBS,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeHubIndex,
    setActiveHubIndex
  };
}
