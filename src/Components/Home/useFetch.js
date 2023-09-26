import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network Error: 404 NOT FOUND!");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setLoading(false);
          setError("Network Error: 404 NOT FOUND!");
          console.log(error);
        });
    }, 2000);
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
