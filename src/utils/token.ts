export type IUser = {
  username: string | undefined;
  theme: "light" | "dark";
  language: "en" | "fs";
};

export const tokenKey = "user_sample_token";

export function getUserData() {
  const data = localStorage.getItem(tokenKey);
  const convertJson: IUser = data && JSON.parse(data);
  return convertJson;
}

export function setToken(username: string) {
  localStorage.setItem(tokenKey, username);
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
}
