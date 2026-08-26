import { useCallback, useContext, useMemo } from 'react';
import { SpecimenContext } from '../context/SpecimenProvider';

export function useSpecimens() {
  const context = useContext(SpecimenContext);

  if (!context) {
    throw new Error('useSpecimens must be used within a SpecimenProvider');
  }

  const {
    specimens = [],
    loading = false,
    error = null,
    lastRefreshedAt = null,
    refresh,
    resurrectSpecimen,
    cancelResurrection,
    dismissSpecimen,
  } = context;

  const {
    sortedSpecimens,
    dormantSpecimens,
    resurrectedSpecimens,
    counts,
  } = useMemo(() => {
    const sortedSpecimens = [...specimens].sort((a, b) => {
      const scoreA = a.preservationScore ?? 0;
      const scoreB = b.preservationScore ?? 0;
      if (scoreA !== scoreB) return scoreB - scoreA;

      const daysA = a.daysWithoutLaunch ?? 0;
      const daysB = b.daysWithoutLaunch ?? 0;
      if (daysA !== daysB) return daysB - daysA;

      return (a.name ?? '').localeCompare(b.name ?? '');
    });

    const isResurrected = (specimen) =>
      specimen?.isResurrected === true ||
      specimen?.status === 'resurrected' ||
      Boolean(specimen?.resurrectedUntil);

    const isDismissed = (specimen) =>
      specimen?.isDismissed === true ||
      specimen?.status === 'dismissed';

    const resurrectedSpecimens = sortedSpecimens.filter(isResurrected);
    const dormantSpecimens = sortedSpecimens.filter(
      (specimen) => !isResurrected(specimen) && !isDismissed(specimen)
    );

    return {
      sortedSpecimens,
      dormantSpecimens,
      resurrectedSpecimens,
      counts: {
        total: sortedSpecimens.length,
        dormant: dormantSpecimens.length,
        resurrected: resurrectedSpecimens.length,