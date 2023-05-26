import { Box } from "@mui/material";
import CustomeDrawer from "../components/CustomeDrawer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Header() {
  return (
    <Box
      height="64px"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      bgcolor="primary.main"
    >
      <CustomeDrawer />
      <AccountBoxIcon sx={{ width: "30px", height: "30px" }} />
    </Box>
  );
}
