import axios from "axios";

const http = axios.create({
  baseURL: "https://v2.jokeapi.dev/joke/",
});

const header = {
  headers: {
    Accept: "application/json",
  },
};
export default {
  getJoke(category = "Any") {
    return http.get(`${category}?safe-mode`, header);
  },
};
