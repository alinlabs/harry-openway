import { useState } from 'react';
import {
  SLIDE15_DATA,
  Language,
  GovernanceCommitment,
  ClosingPillar
} from './data';

export interface Slide15Controller {
  header: typeof SLIDE15_DATA['IN']['header'];
  descriptionTitle: string;
  descriptionText: string;
  commitmentsTitle: string;
  commitments: GovernanceCommitment[];
  metrics: typeof SLIDE15_DATA['IN']['metrics'];
  pillars: ClosingPillar[];
  takeaway: typeof SLIDE15_DATA['IN']['takeaway'];
  activeCommitmentIndex: number;
  setActiveCommitmentIndex: (index: number) => void;
}

export function useSlide15Container(language: Language = 'IN'): Slide15Controller {
  const [activeCommitmentIndex, setActiveCommitmentIndex] = useState<number>(0);
  const data = SLIDE15_DATA[language] || SLIDE15_DATA['IN'];

  return {
    header: data.header,
    descriptionTitle: data.descriptionTitle,
    descriptionText: data.descriptionText,
    commitmentsTitle: data.commitmentsTitle,
    commitments: data.commitments,
    metrics: data.metrics,
    pillars: data.pillars,
    takeaway: data.takeaway,
    activeCommitmentIndex,
    setActiveCommitmentIndex
  };
}
