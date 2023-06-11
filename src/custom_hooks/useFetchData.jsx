import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url){
    const [data, setData] = useState([]);

    useEffect(() => {
      async function res() {
        try {
          const result = await axios.get(url);
          setData(result.data);
        } catch (error) {
          console.log(error);
        }
      }
      res();
    }, []);

    return data;
}