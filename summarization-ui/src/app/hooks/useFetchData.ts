import {useEffect, useState} from 'react';
import {CandidateEntity} from '../types/candidate';

const endpoint = 'http://localhost:8080/api/candidates/load/all';

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState<CandidateEntity[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setCandidates(response.data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    candidates,
  };
};
