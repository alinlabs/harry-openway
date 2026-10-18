import { useState } from 'react';
import { SLIDE05_DATA, Language } from './data';

export const useSlide05Container = (language: Language = 'IN') => {
  const data = SLIDE05_DATA[language] || SLIDE05_DATA.IN;
  const [selectedPointId, setSelectedPointId] = useState<string>('tp1');
  const [activeRoleIndex, setActiveRoleIndex] = useState<number>(0);

  const selectedPoint = data.quadrantPoints.find(p => p.id === selectedPointId) || data.quadrantPoints[0];

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    techSpecs: data.techSpecs,
    influencerRoles: data.influencerRoles,
    quadrantTitle: data.quadrantTitle,
    quadrantSubtitle: data.quadrantSubtitle,
    quadrantLabels: data.quadrantLabels,
    quadrantPoints: data.quadrantPoints,
    selectedPointId,
    setSelectedPointId,
    selectedPoint,
    activeRoleIndex,
    setActiveRoleIndex,
    benchmarkTitle: data.benchmarkTitle,
    benchmarkSubtitle: data.benchmarkSubtitle,
    benchmarks: data.benchmarks,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
