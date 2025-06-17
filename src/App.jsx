import React, { useState, useEffect } from "react";
import "./App.css";
import {
  getDataCards,
  createCard,
  updateCard,
  deleteCard,
} from "./api/index.js";

function App() {
  const [cards, setCards] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formCreateCard, setFormCreateCard] = useState({
    name: "",
    phone: "",
    jobPosition: "",
  });
  const [formEditCard, setFormEditCard] = useState({
    name: "",
    phone: "",
    jobPosition: "",
  });

  useEffect(() => {
    getDataCards().then(setCards).catch(console.error);
  }, []);

  const { name, phone, jobPosition } = formCreateCard;
  const isValid = name.trim() && phone.length === 11 && jobPosition;

  const handleCreateChange = (field) => (e) => {
    const value =
      field === "phone"
        ? e.target.value.replace(/\D/g, "").slice(0, 11)
        : e.target.value;
    setFormCreateCard((prev) => ({ ...prev, [field]: value }));
  };

  const addNewCard = async () => {
    try {
      await createCard(formCreateCard);
      const data = await getDataCards();
      setCards(data);
      setFormCreateCard({ name: "", phone: "", jobPosition: "" });
    } catch (e) {
      console.error(e);
    }
  };

  const startEdit = (card) => {
    setEditingId(card.id);
    setFormEditCard({
      name: card.name,
      phone: card.phone,
      jobPosition: card.jobPosition,
    });
  };

  const handleEditChange = (field) => (e) => {
    const value =
      field === "phone"
        ? e.target.value.replace(/\D/g, "").slice(0, 11)
        : e.target.value;
    setFormEditCard((prev) => ({ ...prev, [field]: value }));
  };

  const saveEditCard = async (id) => {
    try {
      await updateCard(id, formEditCard);
      const data = await getDataCards();
      setCards(data);
      setEditingId(null);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCurrentCard = async (id) => {
    try {
      await deleteCard(id);
      const data = await getDataCards();
      setCards(data);
    } catch (e) {
      console.error(e);
    }
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
              onChange={handleCreateChange("name")}
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
              onChange={handleCreateChange("phone")}
            />
            <select
              className="blockSelect"
              value={jobPosition}
              onChange={handleCreateChange("jobPosition")}
            >
              <option value="">Должность</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="qa">Qa</option>
              <option value="devops">DevOps</option>
            </select>
            <button
              className="blockBtn"
              disabled={!isValid}
              onClick={addNewCard}
            >
              Добавить
            </button>
          </div>
          <div className="cards">
            {cards.map((c) =>
              editingId === c.id ? (
                <div key={c.id} className={`card ${c.jobPosition}`}>
                  <input
                    className="inputString"
                    value={formEditCard.name}
                    onChange={handleEditChange("name")}
                  />
                  <input
                    className="inputString"
                    value={formEditCard.phone}
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
                    onChange={handleEditChange("phone")}
                  />
                  <select
                    className="blockSelect"
                    value={formEditCard.jobPosition}
                    onChange={handleEditChange("jobPosition")}
                  >
                    <option value="admin">Admin</option>
                    <option value="developer">Developer</option>
                    <option value="qa">Qa</option>
                    <option value="devops">DevOps</option>
                  </select>
                  <button
                    className="ok-button"
                    onClick={() => saveEditCard(c.id)}
                  >
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
