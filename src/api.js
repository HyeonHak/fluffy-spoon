import axios from 'axios';

const api = axios.create({
    baseURL="https://api.themoviedb.org/3/",
    params={
        "api_key":"266c12439543d72e070635c5eedd51d7",
        "language":"en-US",
    }
})

export default api;