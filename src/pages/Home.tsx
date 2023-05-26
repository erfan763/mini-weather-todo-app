import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  // "en-US" , "fr-FR"
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={3}>
      <Typography>{t("app_name")}</Typography>
      <Typography variant="h2">{date.toLocaleTimeString("en-US")}</Typography>
      <Typography variant="h2">Good morning, User.</Typography>
    </Box>
  );
}
