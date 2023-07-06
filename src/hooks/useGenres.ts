import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import { FetchResponses } from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string
}
  
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
     apiClient
     .get<FetchResponses<Genre>>('/genres')
     .then(res => res.data),
    staleTime: 24 * 60 *60 * 1000, //24hr
    initialData: {count: genres.length, results: genres}
});
export default useGenres;