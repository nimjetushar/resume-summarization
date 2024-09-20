import {useEffect, useState} from 'react';
import {CandidateEntity, Filter} from '../types/candidate';

export const useFilter = (candidates: CandidateEntity[]) => {
  const [filteredCandidate, setFilteredCandidate] = useState<CandidateEntity[]>(
    []
  );
  const [initialCandidateData, setInitialCandidateData] = useState<
    CandidateEntity[]
  >([]);

  useEffect(() => {
    setFilteredCandidate(candidates);
    setInitialCandidateData(candidates);
  }, [candidates]);

  const applyFilter = (filter: Filter) => {
    const filterBy = Object.fromEntries(
      Object.entries({...filter}).filter(([, v]) => !!v)
    );
    const filteredData = initialCandidateData.filter((candidate) => {
      for (const key in filterBy) {
        const identifier: keyof Filter = key as keyof Filter;
        const item = candidate[identifier];
        if (item === undefined) {
          return false;
        }
        if (identifier === 'yearOfExperience') {
          return item > filterBy[identifier];
        }
        if (item.toLowerCase() !== filterBy[identifier].toLowerCase()) {
          return false;
        }
      }
      return true;
    });

    setFilteredCandidate(filteredData);
  };

  return {filteredCandidate, applyFilter};
};
