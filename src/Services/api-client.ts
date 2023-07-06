import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponses<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4bd70edb097d4b929a62bdc5288cd9ab",
  },
});

class APIClient<T>{
  endpoint: string;

  constructor (endpoint:string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponses<T>>(this.endpoint, config)
    .then(res => res.data);
  }

}
export default APIClient;
