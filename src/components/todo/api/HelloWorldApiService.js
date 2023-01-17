import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveHelloWorldBean = () => {
  return apiClient.get("/hello-world");
};

export const retrivreHelloMessageWithName = (name) => {
  return apiClient.get(`/hello-world/path-variable/${name}`);
};
