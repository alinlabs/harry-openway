import { useState } from 'react';
import { SLIDE06_DATA, Language } from './data';

export const useSlide06Container = (language: Language = 'IN') => {
  const data = SLIDE06_DATA[language] || SLIDE06_DATA.IN;
  const [selectedCriterionId, setSelectedCriterionId] = useState<string>('c1');
  const [activeGatekeeperIndex, setActiveGatekeeperIndex] = useState<number>(0);
  const [activeCommercialIndex, setActiveCommercialIndex] = useState<number>(0);

  const selectedCriterion = data.tenderCriteria.find(c => c.id === selectedCriterionId) || data.tenderCriteria[0];

  return {
    header: data.header,
    dossierTitle: data.dossierTitle,
    dossierSubtitle: data.dossierSubtitle,
    dossierSummary: data.dossierSummary,
    governanceSpecs: data.governanceSpecs,
    gatekeeperRoles: data.gatekeeperRoles,
    matrixTitle: data.matrixTitle,
    matrixSubtitle: data.matrixSubtitle,
    tenderCriteria: data.tenderCriteria,
    selectedCriterionId,
    setSelectedCriterionId,
    selectedCriterion,
    activeGatekeeperIndex,
    setActiveGatekeeperIndex,
    commercialTitle: data.commercialTitle,
    commercialSubtitle: data.commercialSubtitle,
    commercialModels: data.commercialModels,
    activeCommercialIndex,
    setActiveCommercialIndex,
    pillars: data.pillars,
    takeaway: data.takeaway
  };
};
