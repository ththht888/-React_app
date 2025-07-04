import React from "react";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";
// import Button from '../ui/button/Button';
import { Button } from "antd";

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
    <Button
      type="default"
      onClick={onAdd}
      disabled={!isValid}
      className="add-button"
    >
      Добавить
    </Button>
  </div>
);

export default CreateCardForm;
