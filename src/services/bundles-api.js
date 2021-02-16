const BASE_URL = "/api/bundles";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(bundle) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bundle),
  }).then((res) => res.json());
}

export function update(bundle) {
  return fetch(`${BASE_URL}/${bundle._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(bundle),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
