import { useState } from 'react';
import { SLIDE09_DATA, Language } from './data';

export const useSlide09Container = (language: Language = 'IN') => {
  const data = SLIDE09_DATA[language] || SLIDE09_DATA.IN;
  const [activeClientIndex, setActiveClientIndex] = useState<number>(0);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(1);

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    blueprintSpecs: data.blueprintSpecs,
    clientCases: data.clientCases,
    activeClientIndex,
    setActiveClientIndex,
    migrationTitle: data.migrationTitle,
    migrationSubtitle: data.migrationSubtitle,
    migrationStages: data.migrationStages,
    activeStageIndex,
    setActiveStageIndex,
    reliabilityTitle: data.reliabilityTitle,
    reliabilitySubtitle: data.reliabilitySubtitle,
    reliabilityStats: data.reliabilityStats,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
