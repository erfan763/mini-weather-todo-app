import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Persian translations.
// We can localize to any language and any number of languages.
import { getUserData } from "../utils";
const resources = {
  en: {
    translation: {
      menu: "Menu",
      dashboard: "Dashboard",
      todos: "Todos",
      profile: "Profile",
      weather: "Weather",
      todo_list: "Todo List",
      add: "Add",
      back_to_panel: "Back To Panel",
      not_found: "404 Not Found",
      morning: "Good morning",
      light: "Light",
      dark: "Dark",
      theme: "Theme",
      en: "English",
      fs: "Persian",
      username: "Username",
      language: "Language",
      submit: "Submit",
      no_change: "There is no change",
      update_successfully: "Updated successfully",
      delete_successfully: "Deleted successfully",
      create_successfully: "Created successfully",
      yes: "Yes",
      no: "No",
      add_todo: "Add Todo",
      update_todo: "Update Todo",
      title: "Title",
    },
  },
  fs: {
    translation: {
      menu: "فهرست",
      dashboard: "داشبورد",
      todos: "کارها",
      profile: "مشخصات",
      weather: "آب و هوا",
      todo_list: "لیست کارها",
      add: "اضافه کردن",
      back_to_panel: "بازگشت به داشبورد",
      not_found: "404 صفحه مورد نظر پیدا نشد",
      morning: "صبح بخیر",
      light: "روشن",
      dark: "تیره",
      theme: "تم",
      en: "انگیلسی",
      fs: "فارسی",
      username: "نام کاربری",
      language: "زبان",
      submit: "تایید",
      no_change: "چیزی برای تغییر وجود ندارد",
      update_successfully: "با موفقیت بروزرسانی شد.",
      delete_successfully: "با موفقیت حذف شد",
      create_successfully: "با موفقیت ساخته شد",
      yes: "تایید",
      no: "انصراف",
      add_todo: "اضافه کردن کار ها",
      update_todo: "بروزرسانی کارها",
      title: "عنوان",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: getUserData()?.language || "en",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});
export default i18next;
