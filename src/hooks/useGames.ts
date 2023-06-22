import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id:number;
    name:string;
    slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[], 
    metacritic: number
}

interface FetchGamesResponses{
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isloading, setisloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setisloading(true);
        apiClient
          .get<FetchGamesResponses>('/games')
          .then (res => {
            setGames(res.data.results)
            setisloading(false);
            })
          .catch(err => {
             if (err instanceof CanceledError) return;
             setError(err.message)
             setisloading(false);
            })

        return () => controller.abort();
    }, [])
    return {games, error, isloading} ;
}

export default useGames