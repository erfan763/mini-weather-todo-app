import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
export default function ThemeSwitcher() {
  return (
    <div>
      {/* <Typography fontSize="0.8rem" color="rgb(111, 126, 140)" p={2}>
              Mode
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button
                variant="outlined"
                sx={{
                  m: 0,
                  borderRadius: "10px 0px 0px 10px",
                  bgcolor: !isDark ? "rgb(240, 247, 255)" : "unset",
                  color: isDark ? "rgb(62, 80, 96)" : "primary",
                  borderColor: isDark ? "rgb(62, 80, 96)" : "primary",
                  "&:hover": {
                    bgcolor: !isDark ? "rgb(240, 247, 255)" : "unset",
                  },
                }}
                startIcon={<LightModeIcon />}
                onClick={() => setIsDark(false)}
              >
                Light
              </Button>
              <Button
                variant="outlined"
                sx={{
                  m: 0,
                  borderRadius: "0px 10px 10px 0px",
                  bgcolor: isDark ? "rgb(19, 47, 76)" : "unset",
                  color: !isDark ? "rgb(62, 80, 96)" : "primary",
                  borderColor: !isDark ? "rgb(62, 80, 96)" : "primary",
                  "&:hover": {
                    bgcolor: isDark ? "rgb(19, 47, 76)" : "unset",
                  },
                }}
                startIcon={<DarkModeIcon />}
                onClick={() => setIsDark(true)}
              >
                Dark
              </Button> */}
      {/* </Box> */}
    </div>
  );
}
