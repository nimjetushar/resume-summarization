import {useEffect, useState} from 'react';
import {CandidateEntity, Filter} from '../types/candidate';

export const useFilter = (candidates: CandidateEntity[]) => {
  const [filteredCandidate, setFilteredCandidate] = useState<CandidateEntity[]>(
    []
  );
  const [initialCandidateData, setInitialCandidateData] = useState<
    CandidateEntity[]
  >([]);

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

        if (identifier === 'skills') {
          return (filterBy[identifier] as string[]).some((i) =>
            item.toLowerCase().includes(i.toLowerCase())
          );
        }
        if (
          item.toLowerCase() !== (filterBy[identifier] as string).toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });

    setFilteredCandidate(filteredData);
  };

  const filterByName = (name: string) => {
    if (name) {
      const filteredData = initialCandidateData.filter((candidate) =>
        candidate.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredCandidate(filteredData);
    }
  };

  useEffect(() => {
    setFilteredCandidate(candidates);
    setInitialCandidateData(candidates);
  }, [candidates]);

  return {filteredCandidate, applyFilter, filterByName};
};
