import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const CardEdit = ({ card, formData, onEditChange, onSave, onCancel }) => (
  <div className={`card ${card.jobPosition}`}>
    <Input value={formData.name} onChange={onEditChange("name")} />
    <Input value={formData.phone} onChange={onEditChange("phone")} isPhone />
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

export default CardEdit;
