import APIClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from 'ms';
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
});
export default usePlatforms;
