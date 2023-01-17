import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllMyTodos = (username) => {
  return apiClient.get(`/users/${username}/todos`);
};

export const deleteTodoById = (username, id) => {
  return apiClient.delete(`/users/${username}/todos/${id}`);
};
