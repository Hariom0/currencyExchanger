import React, { useEffect, useState } from "react";

function useFetch(from) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    async function fetchData() {
      try {
        const rawData = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
        );
        let bufferData = await rawData.json();
        setData(bufferData[from]);

      } catch (error) {
        console.log("Error while Fetching data", error);
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  },[from]);
  return {loading,data};
}

export default useFetch;
