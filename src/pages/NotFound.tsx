import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Box width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <Typography variant="h4" color="primary">
        {t("not_found")}
      </Typography>
      <Button
        sx={{ mt: 3, direction: "ltr" }}
        startIcon={<ArrowBackRounded />}
        component={Link}
        to="/"
        color="secondary"
        variant="outlined"
      >
        {t("back_to_panel")}
      </Button>
    </Box>
  );
}
