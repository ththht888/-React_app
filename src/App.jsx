import React, { useState, useEffect } from "react";
import "./App.css";
import { API_BASE } from "./constans";
import { deleteCard, getDataCards } from "./api";

// Два задания
// 1 - вынести апишки в indexed.js
// 2 - исправить state инпутов карточки на один объект

// Было
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [position, setPosition] = useState("");

// Стало
const [formCreateCard, setFormCreateCard] = useState({
  name: "",
  phone: "",
  jobPosition: "",
});

// аналогично с editState
const [editName, setEditName] = useState("");
const [editPhone, setEditPhone] = useState("");
const [editPosition, setEditPosition] = useState("");

// на 
const [formEditCard, setFormEditCard] = useState({
  name: "",
  phone: "",
  jobPosition: "",
});

function App() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [position, setPosition] = useState("");
  const [cards, setCards] = useState([]);
  const [editingId, setEditingId] = useState(null);
  // const [editName, setEditName] = useState("");
  // const [editPhone, setEditPhone] = useState("");
  // const [editPosition, setEditPosition] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/task/all`)
      .then((r) => r.json())
      .then(setCards)
      .catch(console.error);
  }, []);

  const isValid = name.trim() && phone.length === 11 && position;

  const addCard = () => {
    fetch(`${API_BASE}/task`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, jobPosition: position }),
    })
      .then(() => fetch(`${API_BASE}/task/all`))
      .then((r) => r.json())
      .then((data) => {
        setCards(data);
        setName("");
        setPhone("");
        setPosition("");
      })
      .catch(console.error);
  };

  const startEdit = (card) => {
    setEditingId(card.id);
    setEditName(card.name);
    setEditPhone(card.phone);
    setEditPosition(card.jobPosition);
  };

  const saveEdit = (id) => {
    fetch(`${API_BASE}/task/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name: editName,
        phone: editPhone,
        jobPosition: editPosition,
      }),
    })
      .then(() => fetch(`${API_BASE}/task/all`))
      .then((r) => r.json())
      .then((data) => {
        setCards(data);
        setEditingId(null);
      })
      .catch(console.error);
  };

  const deleteCurrentCard = (id) => {
    deleteCard(id)
      .then((res) => getDataCards().then((res) => setCards(res)))
      .catch((e) => console.error(e));
  };

  return (
    <div className="blockMain">
      <h3 className="mainText">Список сотрудников</h3>
      <div className="blockTransparent">
        <div className="blockCartandCard">
          <div className="cart">
            <input
              className="inputString"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inputString"
              placeholder="Телефон"
              value={phone}
              onKeyDown={(e) =>
                ["e", "-", "+", ".", " ", ",", "ArrowUp", "ArrowDown"].includes(
                  e.key
                ) && e.preventDefault()
              }
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))
              }
            />
            <select
              className="blockSelect"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Должность</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="qa">Qa</option>
              <option value="devops">DevOps</option>
            </select>
            <button className="blockBtn" disabled={!isValid} onClick={addCard}>
              Добавить
            </button>
          </div>
          <div className="cards">
            {cards.map((c) =>
              editingId === c.id ? (
                <div key={c.id} className={`card ${c.jobPosition}`}>
                  <input
                    className="inputString"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    className="inputString"
                    value={editPhone}
                    onKeyDown={(e) =>
                      [
                        "e",
                        "-",
                        "+",
                        ".",
                        " ",
                        ",",
                        "ArrowUp",
                        "ArrowDown",
                      ].includes(e.key) && e.preventDefault()
                    }
                    onChange={(e) =>
                      setEditPhone(
                        e.target.value.replace(/\D/g, "").slice(0, 11)
                      )
                    }
                  />
                  <select
                    className="blockSelect"
                    value={editPosition}
                    onChange={(e) => setEditPosition(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="developer">Developer</option>
                    <option value="qa">Qa</option>
                    <option value="devops">DevOps</option>
                  </select>
                  <button className="ok-button" onClick={() => saveEdit(c.id)}>
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/ok.svg`}
                      className="ok-icon"
                      alt="ok"
                    />
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => setEditingId(null)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/cancel.svg`}
                      className="cancel-icon"
                      alt="cancel"
                    />
                  </button>
                </div>
              ) : (
                <div key={c.id} className={`card ${c.jobPosition}`}>
                  <p>Имя: {c.name}</p>
                  <p>Телефон: {c.phone}</p>
                  <p>Должность: {c.jobPosition}</p>
                  <button
                    className="change-button"
                    onClick={() => startEdit(c)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/changeBtn.svg`}
                      className="change-icon"
                      alt="change"
                    />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteCurrentCard(c.id)}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/icons/trash.svg`}
                      className="delete-icon"
                      alt="delete"
                    />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
