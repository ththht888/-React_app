import React from "react";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./CardView.css";

const CardView = ({ card, onStartEdit, onDelete }) => {
  const { t } = useTranslation();

  return (
    <div className={`card ${card.jobPosition}`}>
      <p>{t("name")}: {card.name}</p>
      <p>{t("phone")}: {card.phone}</p>
      <p>{t("position")}: {t(card.jobPosition)}</p>
      
      <Button
        onClick={onStartEdit}
        className="edit-icon-button"
        icon={<EditOutlined />}
        title={t("edit")}
      />
      <Button
        onClick={onDelete}
        className="delete-icon-button"
        icon={<DeleteOutlined />}
        title={t("delete")}
      />
    </div>
  );
};

export default CardView;