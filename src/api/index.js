import { API_BASE } from "../constans";

export const getDataCards = async () => {
  try {
    const res = await fetch(`${API_BASE}/task/all`);
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createCard = async (data) => {
  try {
    const res = await fetch(`${API_BASE}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateCard = async (id, data) => {
  try {
    const res = await fetch(`${API_BASE}/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...data }),
    });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const deleteCard = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/task/${id}`, { method: "DELETE" });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};
