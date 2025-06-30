import React, { useState, useEffect } from "react";
import { getDataCards, createCard, updateCard, deleteCard } from "./api";
import Card from "./components/card/Card";
import CreateCardForm from "./components/form/CreateCardForm";
import './components/form/Form.css';
import './components/card/Card.css';
import './styles/Layout.css';


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
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getDataCards();
      if (res) setCards(res);
    } catch (e) {
      console.error(e);
    }
  };

  const isValid =
    formCreateCard.name.trim() &&
    formCreateCard.phone.length === 11 &&
    formCreateCard.jobPosition;

  const handleChange = (formSetter) => (field) => (e) => {
    const value =
      field === "phone"
        ? e.target.value.replace(/\D/g, "").slice(0, 11)
        : e.target.value;
    formSetter((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateChange = handleChange(setFormCreateCard);
  const handleEditChange = handleChange(setFormEditCard);

  const addNewCard = async () => {
    try {
      const response = await createCard(formCreateCard);
      if (response) {
        await fetchData();
        setFormCreateCard({ name: "", phone: "", jobPosition: "" });
      }
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

  const saveEditCard = async (id) => {
    try {
      const response = await updateCard(id, formEditCard);
      if (response) {
        await fetchData();
        setEditingId(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCurrentCard = async (id) => {
    try {
      const response = await deleteCard(id);
      if (response) await fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="blockMain">
      <h3 className="mainText">Список сотрудников</h3>
      <div className="blockTransparent">
        <div className="blockCartandCard">
          <CreateCardForm
            formCreateCard={formCreateCard}
            handleCreateChange={handleCreateChange}
            onAdd={addNewCard}
            isValid={isValid}
          />
          <div className="cards">
            {cards.map((c) => (
              <Card
                key={c.id}
                card={c}
                editing={editingId === c.id}
                formData={formEditCard}
                onEditChange={handleEditChange}
                onSave={() => saveEditCard(c.id)}
                onCancel={() => setEditingId(null)}
                onStartEdit={() => startEdit(c)}
                onDelete={() => deleteCurrentCard(c.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
