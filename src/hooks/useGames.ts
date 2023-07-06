import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponses } from "../Services/api-client";
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
  
const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery:GameQuery) =>  useQuery<FetchResponses<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
  apiClient.getAll({
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder, 
      search: gameQuery.searchText
    },
  }),
  staleTime: 24 * 60 *60 * 1000, //24hr
});

export default useGames;