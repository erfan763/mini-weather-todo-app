import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} mt={3}>
      <Typography variant="h2">{date.toLocaleTimeString("en-US")}</Typography>
      <Typography variant="h2">Good morning, User.</Typography>
    </Box>
  );
}
