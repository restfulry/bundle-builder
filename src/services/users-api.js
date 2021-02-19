const BASE_URL = "/api/users";

export function getOne() {
  return fetch(BASE_URL).then((res) => res.json());
}
