import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
}
  
interface FetchGenresResponses{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isloading, setisloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setisloading(true);
        apiClient
          .get<FetchGenresResponses>('/genres')
          .then (res => {
            setGenres(res.data.results)
            setisloading(false);
            })
          .catch(err => {
             if (err instanceof CanceledError) return;
             setError(err.message)
             setisloading(false);
            })

        return () => controller.abort();
    }, [])
    return {genres, error, isloading} ;
}
export default useGenres;