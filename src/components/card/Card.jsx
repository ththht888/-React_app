import React, { useEffect } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const Card = ({
  card,
  editing,
  formData,
  onEditChange,
  onSave,
  onCancel,
  onStartEdit,
  onDelete,
}) => {
  useEffect(() => {
    console.log("Ререндер карточки", card);
  }, [card]);

  if (editing) {
    return (
      <div className={`card ${card.jobPosition}`}>
        <Input value={formData.name} onChange={onEditChange("name")} />
        <Input
          value={formData.phone}
          onChange={onEditChange("phone")}
          isPhone
        />
        <Select
          value={formData.jobPosition}
          onChange={onEditChange("jobPosition")}
        />
        <Button
          onClick={onSave}
          className="ok-button"
          text={
            <img
              src={`${process.env.PUBLIC_URL}/icons/ok.svg`}
              className="ok-icon"
              alt="ok"
            />
          }
        />
        <Button
          onClick={onCancel}
          className="cancel-button"
          text={
            <img
              src={`${process.env.PUBLIC_URL}/icons/cancel.svg`}
              className="cancel-icon"
              alt="cancel"
            />
          }
        />
      </div>
    );
  }

  return (
    <div className={`card ${card.jobPosition}`}>
      <p>Имя: {card.name}</p>
      <p>Телефон: {card.phone}</p>
      <p>Должность: {card.jobPosition}</p>
      <Button
        onClick={onStartEdit}
        className="change-button"
        text={
          <img
            src={`${process.env.PUBLIC_URL}/icons/changeBtn.svg`}
            className="change-icon"
            alt="change"
          />
        }
      />
      <Button
        onClick={onDelete}
        className="delete-button"
        text={
          <img
            src={`${process.env.PUBLIC_URL}/icons/trash.svg`}
            className="delete-icon"
            alt="delete"
          />
        }
      />
    </div>
  );
};

export default Card;
