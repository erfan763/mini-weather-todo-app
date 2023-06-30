import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUserData } from "../../utils";
import useRTL from "../../hooks/useRTL";
import { getGreeting } from "./greeting";
import please from "../../assets/please.jpg";

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
  const isRTL = useRTL();

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={3}>
        <Typography variant="h2">{date.toLocaleTimeString(isRTL.isRtl ? "fr-FR" : "en-US")}</Typography>
        <Typography variant="h2">
          {getGreeting(t)},{getUserData()?.username}.
        </Typography>
        <Box width="500px" height="300px">
          <img src={please} alt="please" width="500px" height="300px" style={{ borderRadius: "10px" }} />
        </Box>
      </Box>
    </>
  );
}
