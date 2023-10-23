import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const newData = await response.json();
        setData(newData); // aca almacenamos los datos de las movies
        //console.log(data);
      } else {
        console.error("Error al obtener datos de peliculas");
      }
    } catch (error) {
      console.error("Error al obtener datos de las peliculas", error);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [url]);

  return [data];
};

export default useFetch;