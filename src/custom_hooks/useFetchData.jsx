import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function res() {
      setStatus("loading");
      try {
        const result = await axios.get(url);
        setData(result.data);
        setStatus("success");
      } catch (error) {
        console.log(error);
      }
    }
    res();
  }, []);

  return {data, status};
}
