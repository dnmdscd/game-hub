import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponses } from "../Services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform: Platform}[],
    metacritic: number;
    rating_top: number;
    rating: number;
  }

const useGames = (gameQuery:GameQuery) =>  useQuery<FetchResponses<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
   apiClient
   .get<FetchResponses<Game>>('/games', {
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder, 
      search: gameQuery.searchText
    },
    })
   .then(res => res.data),
  staleTime: 24 * 60 *60 * 1000, //24hr
});

export default useGames;