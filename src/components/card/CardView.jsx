import React from "react";
import Button from "../ui/Button";

const CardView = ({ card, onStartEdit, onDelete }) => (
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

export default CardView;
