import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          console.log("Error fetching data:", err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup: cancel request if component unmounts
    return () => controller.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
