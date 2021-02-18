const BASE_URL = "/api/stores";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(store) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(store),
  }).then((res) => res.json());
}
