import React from "react";
import InputMask from "react-input-mask";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const Form = ({ formCreateCard, handleCreateChange, onAdd, isValid }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="cart">
      <input
        placeholder={t("name")}
        value={formCreateCard.name}
        onChange={handleCreateChange("name")}
      />
      <InputMask
        mask="+7 (999) 999-99-99"
        value={formCreateCard.phone}
        onChange={handleCreateChange("phone")}
      >
        {(inputProps) => <input {...inputProps} placeholder={t("phone")} />}
      </InputMask>
      <select
        value={formCreateCard.jobPosition}
        onChange={handleCreateChange("jobPosition")}
      >
        <option value="">{t("position")}</option>
        <option value="admin">{t("admin")}</option>
        <option value="developer">{t("developer")}</option>
        <option value="qa">{t("qa")}</option>
        <option value="devops">{t("devops")}</option>
      </select>
      <Button
        type="default"
        onClick={onAdd}
        disabled={!isValid}
        className="add-button"
      >
        {t("add")}
      </Button>
    </div>
  );
};

export default Form;
