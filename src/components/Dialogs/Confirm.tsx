import { Box, Button, CircularProgress, Dialog, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Confirm({
  open,
  disabled,
  onClose,
  onConfirm,
  loading,
}: {
  open: boolean;
  disabled?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}) {
  const SMobile = useMediaQuery("(max-width:350px)");
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box py={4} p={2} textAlign="center">
        <Typography variant="h5">{t("are_you_sure")}</Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1} mx={SMobile ? 0 : 8} my={2}>
          <Button disabled={disabled} variant="outlined" onClick={onClose}>
            {t("no")}
          </Button>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button disabled={disabled} variant="contained" onClick={onConfirm}>
              {t("yes")}
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
