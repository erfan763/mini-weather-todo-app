import { useTranslation } from "react-i18next";

const rtlLanguages = ["fs"];

export default function useRTL() {
  const { i18n } = useTranslation();

  const isRtl = rtlLanguages.includes(i18n.language);

  return { isRtl, direction: isRtl ? "rtl" : "ltr" };
}
