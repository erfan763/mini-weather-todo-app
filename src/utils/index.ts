import { ITodo } from "../pages/todo/todoType";

export type IUser = {
  username: string | undefined;
  theme: "light" | "dark";
  language: "en" | "fs";
};

export const tokenKey = "user_sample_token";
export const todoKey = "user_todo_token";

export function getUserData() {
  const data = localStorage.getItem(tokenKey);
  const convertJson: IUser = data && JSON.parse(data);
  return convertJson;
}

export function getUserTodoData() {
  const data = localStorage.getItem(todoKey);
  const convertJson: ITodo[] = data && JSON.parse(data);
  return convertJson;
}

export function setToken(data: string) {
  localStorage.setItem(tokenKey, data);
}

export function setTodoToken(data: string) {
  localStorage.setItem(todoKey, data);
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
}
