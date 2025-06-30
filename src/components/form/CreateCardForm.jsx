import React from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const CreateCardForm = ({
  formCreateCard,
  handleCreateChange,
  onAdd,
  isValid,
}) => (
  <div className="cart">
    <Input
      placeholder="Имя"
      value={formCreateCard.name}
      onChange={handleCreateChange("name")}
    />
    <Input
      placeholder="Телефон"
      value={formCreateCard.phone}
      onChange={handleCreateChange("phone")}
      isPhone
    />
    <Select
      value={formCreateCard.jobPosition}
      onChange={handleCreateChange("jobPosition")}
    />
    <Button text="Добавить" onClick={onAdd} disabled={!isValid} />
  </div>
);

export default CreateCardForm;
