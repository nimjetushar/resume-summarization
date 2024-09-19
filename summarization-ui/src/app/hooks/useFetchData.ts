import {useEffect, useState} from 'react';

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // TODO fetch data
  }, []);

  return {
    loading,
    candidates,
  };
};
