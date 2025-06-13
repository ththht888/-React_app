import { API_BASE } from "../constans";

export const deleteCard = (id) => {
  return fetch(`${API_BASE}/task/${id}`, { method: "DELETE" })
    .then(() => console.log("успешно удалено"))
    .catch(console.error);
};

export const getDataCards = () => {
  return fetch(`${API_BASE}/task/all`)
    .then((r) => r.json())
    .catch(console.error);
};
