import { Box, Button, CircularProgress, Dialog, Typography } from "@mui/material";

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
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box py={4} p={2} textAlign="center">
        <Typography variant="h5">Are you sure?</Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1} mx={8} my={2}>
          <Button disabled={disabled} variant="outlined" onClick={onClose}>
            No
          </Button>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button disabled={disabled} variant="contained" onClick={onConfirm}>
              Yes
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
