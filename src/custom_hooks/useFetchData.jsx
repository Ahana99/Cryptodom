import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url){
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
          setdata(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return data;
}