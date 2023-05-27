import { PaletteMode } from "@mui/material";
import { getUserData } from "../utils";

export const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: getUserData()?.language === "fs" ? "rtl !important" : "ltr",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.6,
          },
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "rgb(25, 118, 210)",
            light: "rgb(25, 118, 210)",
            contrastText: "#FFFFFF",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "rgb(25, 118, 210)",
          },
        }),
  },

  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",

      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:400px)": {
        fontSize: "1.25rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",

      "@media (max-width:650px)": {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      "@media (max-width:400px)": {
        fontSize: "1rem",
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",

      "@media (max-width:400px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",

      "@media (max-width:400px)": {
        fontSize: "1rem",
      },
    },
  },
});
