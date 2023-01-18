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

export const updateTodo = (username, id) => {
  return apiClient.put(`/users/${username}/todos/${id}`);
};

export const retrieveTodo = (username, id) => {
  return apiClient.get(`/users/${username}/todos/${id}`);
};

export const patchTodo = (username, id, todo) => {
  return apiClient.patch(`/users/${username}/todos/${id}`, todo);
};
