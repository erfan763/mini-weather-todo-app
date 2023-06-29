import { Box, Button, Dialog, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUserData } from "../../utils";
import useRTL from "../../hooks/useRTL";
import { getGreeting } from "./greeting";
import please from "../../assets/please.jpg";
import kiss from "../../assets/kiss.jpg";
import "./index.css";

export default function Home() {
  // "en-US" , "fr-FR"
  // const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  function refreshClock() {
    // setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const { t } = useTranslation();
  const isRTL = useRTL();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <img src={kiss} alt="kiss" width="500px" height="300px" style={{ borderRadius: "10px" }} />
      </Dialog>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={3}>
        {/* <Typography variant="h2">{date.toLocaleTimeString(isRTL.isRtl ? "fr-FR" : "en-US")}</Typography> */}
        <Typography variant="h2">
          {getGreeting(t)},{getUserData()?.username}.
        </Typography>
        <Box width="500px" height="300px">
          <img src={please} alt="please" width="500px" height="300px" style={{ borderRadius: "10px" }} />
        </Box>
        <Typography fontSize="24px">{t("kiss")}</Typography>
        <Box display="flex" gap="20px">
          {isRTL ? (
            <>
              <Button variant="contained" className="my-button" sx={{ cursor: "default" }}>
                {t("noo")}
              </Button>
              <Button variant="contained" onClick={() => setOpen(true)}>
                {t("yess")}
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={() => setOpen(true)}>
                YES
              </Button>
              <Button variant="contained" className="my-button" sx={{ cursor: "default" }}>
                NO
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
