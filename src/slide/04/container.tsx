import { useState } from 'react';
import { SLIDE04_DATA, Language, QuadrantPoint } from './data';

export const useSlide04Container = (language: Language = 'IN') => {
  const data = SLIDE04_DATA[language] || SLIDE04_DATA.IN;
  const [selectedPointId, setSelectedPointId] = useState<string>('p1');
  const [activePersonaIndex, setActivePersonaIndex] = useState<number>(0);

  const selectedPoint = data.quadrantPoints.find(p => p.id === selectedPointId) || data.quadrantPoints[0];

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    accountSpecs: data.accountSpecs,
    cSuitePersonas: data.cSuitePersonas,
    quadrantTitle: data.quadrantTitle,
    quadrantSubtitle: data.quadrantSubtitle,
    quadrantLabels: data.quadrantLabels,
    quadrantPoints: data.quadrantPoints,
    selectedPointId,
    setSelectedPointId,
    selectedPoint,
    activePersonaIndex,
    setActivePersonaIndex,
    tcoTitle: data.tcoTitle,
    tcoSubtitle: data.tcoSubtitle,
    benchmarks: data.benchmarks,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
