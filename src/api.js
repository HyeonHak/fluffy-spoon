import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '266c12439543d72e070635c5eedd51d7',
    language: 'en-US',
  },
});

export const tvApi = {
  topRated: () => api.get(`/tv/top_rated`),
  popular: () => api.get(`/tv/popular`),
  airingToday: () => api.get(`/tv/airing_today`),
  tvShowDetail: (id) =>
    api.get(`/tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  searchTVshow: (terms) => api.get(`/search/movie`, { params: { query: encodeURIComponent(terms) } }),
};

export const movieApi = {
  nowPlaying: () => api.get(`/movie/now_playing`),
  upcomming: () => api.get(`/movie/upcoming`),
  popular: () => api.get(`/movie/popular`),
  movieDetail: (id) => api.get(`/movie/${id}`, { params: { append_to_response: 'videos' } }),
  searchMovie: (terms) => api.get(`/search/movie`, { params: { query: encodeURIComponent(terms) } }),
};
export default api;
