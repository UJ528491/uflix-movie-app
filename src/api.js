import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cb1f8ea461c0d46c85be52b0d9f766b4",
    language: "en-US",
  },
});
// api.get("url") /url 절대경로 url 상대경로
export const MoviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
export const TVApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id => api.get(`tv/${id}`),
  search: term =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};
