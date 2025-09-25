import axios from "axios";

const http = axios.create({
  baseURL: "https://v2.jokeapi.dev/joke/Spooky?safe=mode",
});

const header = {
  headers: {
    Accept: "application/json",
  },
};
export default {
  getJoke() {
    return http.get("", header);
  },
};
