import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((r) => {
        setIsPending(false);
        setData(r);
        setError({ err: false });
      })
      .catch((e) => setError({ err: true, textError: e }));
  }, [url]);
  return { data, isPending, error };
};
