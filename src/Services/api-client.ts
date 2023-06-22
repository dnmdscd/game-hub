import Axios from "axios";

export default Axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: 
    {key:'4bd70edb097d4b929a62bdc5288cd9ab'}
})
