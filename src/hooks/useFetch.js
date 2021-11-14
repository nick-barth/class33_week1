import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          signal: abortController.signal,
        });
        const people = await res.json();
        setData(people.results);
        setIsLoading(false);
      } catch (err) {
        setData([]);
        setError(err.message);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
