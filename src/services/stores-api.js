const BASE_URL = "/api/stores";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}
