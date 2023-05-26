export const tokenKey = "username_token";

export function getToken() {
  const token = localStorage.getItem(tokenKey);
  return token;
}

export function setToken(username: string) {
  localStorage.setItem(tokenKey, username);
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
}
