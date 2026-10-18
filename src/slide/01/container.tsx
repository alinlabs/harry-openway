import {
  SLIDE01_DATA,
  Language,
  ValuePillar,
  CandidateProfile,
  ReadinessDimension
} from './data';

export interface Slide01Controller {
  eyebrow: { category: string; subtitle: string };
  profile: CandidateProfile;
  description: string;
  quickStats: { label: string; value: string; sub: string }[];
  dimensionsLabel: string;
  dimensions: ReadinessDimension[];
  pillars: ValuePillar[];
  takeaway: { proof: string; alignment: string };
  gaugeRadius: number;
  gaugeCircumference: number;
  gaugeOffset: number;
}

export function useSlide01Container(language: Language = 'IN'): Slide01Controller {
  const data = SLIDE01_DATA[language] || SLIDE01_DATA['IN'];
  
  const gaugeRadius = 45;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius;
  const gaugeOffset = gaugeCircumference - (data.profile.readinessScore / 100) * gaugeCircumference;

  return {
    eyebrow: data.eyebrow,
    profile: data.profile,
    description: data.description,
    quickStats: data.quickStats,
    dimensionsLabel: data.dimensionsLabel,
    dimensions: data.dimensions,
    pillars: data.pillars,
    takeaway: data.takeaway,
    gaugeRadius,
    gaugeCircumference,
    gaugeOffset
  };
}
