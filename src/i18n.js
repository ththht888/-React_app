import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        title: "Список сотрудников",
        name: "Имя",
        phone: "Телефон",
        position: "Должность",
        admin: "Администратор",
        developer: "Разработчик",
        qa: "Тестировщик",
        devops: "DevOps",
        add: "Добавить",
        edit: "Изменить",
        delete: "Удалить",
        save: "Сохранить",
        cancel: "Отмена",
      },
    },
    en: {
      translation: {
        title: "Employee List",
        name: "Name",
        phone: "Phone",
        position: "Position",
        admin: "Admin",
        developer: "Developer",
        qa: "QA",
        devops: "DevOps",
        add: "Add",
        edit: "Edit",
        delete: "Delete",
        save: "Save",
        cancel: "Cancel",
      },
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
