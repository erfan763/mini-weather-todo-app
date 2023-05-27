import { TFunction } from "i18next";

export const getGreeting = (t: TFunction<"translation", undefined, "translation">) => {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = t("morning");
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = t("afternoon");
  } else {
    greeting = t("evening");
  }

  return greeting;
};
