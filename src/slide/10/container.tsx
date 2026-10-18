import { useState } from 'react';
import { SLIDE10_DATA, Language } from './data';

export const useSlide10Container = (language: Language = 'IN') => {
  const data = SLIDE10_DATA[language] || SLIDE10_DATA.IN;
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [selectedRadarIndex, setSelectedRadarIndex] = useState<number>(0);

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    complianceSpecs: data.complianceSpecs,
    regulatoryPillars: data.regulatoryPillars,
    activePillarIndex,
    setActivePillarIndex,
    radarTitle: data.radarTitle,
    radarSubtitle: data.radarSubtitle,
    radarPoints: data.radarPoints,
    selectedRadarIndex,
    setSelectedRadarIndex,
    roadmapTitle: data.roadmapTitle,
    roadmapSubtitle: data.roadmapSubtitle,
    roadmapMilestones: data.roadmapMilestones,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
