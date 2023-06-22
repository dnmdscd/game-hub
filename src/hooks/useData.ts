import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface FetchResponses <T>{
    count: number;
    results: T[];
  }
  
const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isloading, setisloading] = useState(false);
      
    useEffect(() => {
      const controller = new AbortController();

        setisloading(true);
        apiClient
          .get<FetchResponses<T>>(endpoint, {signal: controller.signal})
          .then((res) => {
            setData(res.data.results);
            setisloading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            {
              setError(err.message);
              setisloading(false);
            }});
        return () => controller.abort();
    }, []);
    return{data, error, isloading};
}

export default useData;