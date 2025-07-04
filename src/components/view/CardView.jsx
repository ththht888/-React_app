import React from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./CardView.css";

const CardView = ({ card, onStartEdit, onDelete }) => {
  return (
    <div className={`card ${card.jobPosition}`}>
      <p>Имя: {card.name}</p>
      <p>Телефон: {card.phone}</p>
      <p>Должность: {card.jobPosition}</p>
      <Button
        onClick={onStartEdit}
        className="edit-icon-button"
        icon={<EditOutlined />}
      />
      <Button
        onClick={onDelete}
        className="delete-icon-button"
        icon={<DeleteOutlined />}
      />
    </div>
  );
};

export default CardView;
