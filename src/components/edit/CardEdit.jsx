import React from "react";
import { Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Input from "../ui/input/Input";
import Select from "../ui/select/Select";

const CardEdit = ({ card, formData, onEditChange, onSave, onCancel }) => {
  const { t } = useTranslation();

  return (
    <div className={`card ${card.jobPosition}`}>
      <Input
        placeholder={t("name")}
        value={formData.name}
        onChange={onEditChange("name")}
      />
      <Input
        placeholder={t("phone")}
        value={formData.phone}
        onChange={onEditChange("phone")}
        isPhone
      />
      <Select
        value={formData.jobPosition}
        onChange={onEditChange("jobPosition")}
        options={[
          { value: "admin", label: t("admin") },
          { value: "developer", label: t("developer") },
          { value: "qa", label: t("qa") },
          { value: "devops", label: t("devops") },
        ]}
      />
      <Button
        onClick={onSave}
        className="ok-button"
        icon={<CheckOutlined />}
        title={t("save")}
      />
      <Button
        onClick={onCancel}
        className="cancel-button"
        icon={<CloseOutlined />}
        title={t("cancel")}
      />
    </div>
  );
};

export default CardEdit;
