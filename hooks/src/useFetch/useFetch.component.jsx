import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const respons = await fetch(url);
      //console.log(respons);

      if (!respons.ok) {
        throw new Error("Something wenr frong!");
      }

      const data = await respons.json();
      //console.log(data);

      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
