import { useState } from 'react';
import { SLIDE08_DATA, Language } from './data';

export const useSlide08Container = (language: Language = 'IN') => {
  const data = SLIDE08_DATA[language] || SLIDE08_DATA.IN;
  const [selectedPointId, setSelectedPointId] = useState<string>('m1');
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);

  const selectedPoint = data.quadrantPoints.find(p => p.id === selectedPointId) || data.quadrantPoints[0];

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    marketSpecs: data.marketSpecs,
    digitalModules: data.digitalModules,
    quadrantTitle: data.quadrantTitle,
    quadrantSubtitle: data.quadrantSubtitle,
    quadrantLabels: data.quadrantLabels,
    quadrantPoints: data.quadrantPoints,
    selectedPointId,
    setSelectedPointId,
    selectedPoint,
    activeModuleIndex,
    setActiveModuleIndex,
    benchmarkTitle: data.benchmarkTitle,
    benchmarkSubtitle: data.benchmarkSubtitle,
    benchmarks: data.benchmarks,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
