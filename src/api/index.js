import { API_BASE } from "../constans";

export const getDataCards = () => {
  return fetch(`${API_BASE}/task/all`)
    .then((r) => r.json())
    .catch(console.error);
};

export const createCard = ({ name, phone, jobPosition }) => {
  return fetch(`${API_BASE}/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, jobPosition }),
  })
    .then(() => console.log("успешно создано"))
    .catch(console.error);
};

export const updateCard = (id, { name, phone, jobPosition }) => {
  return fetch(`${API_BASE}/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, phone, jobPosition }),
  })
    .then(() => console.log("успешно обновлено"))
    .catch(console.error);
};

export const deleteCard = (id) => {
  return fetch(`${API_BASE}/task/${id}`, { method: "DELETE" })
    .then(() => console.log("успешно удалено"))
    .catch(console.error);
};
