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
          // secondary: {
          //   main: "rgb(0, 127, 255)",
          //   "100": "rgb(240, 247, 255)",
          // },
          // warning: {
          //   main: "#F2BC18",
          // },
          // error: {
          //   main: "#bd0504",
          // },
          // success: {
          //   main: "#00CD67",
          // },
          // info: {
          //   main: "#3D9CCC",
          // },
          background: {},
        }
      : {
          // palette values for dark mode
          primary: {
            main: "rgb(25, 118, 210)",
          },
          // secondary: {
          //   main: "rgb(0, 127, 255)",
          //   "100": "rgb(240, 247, 255)",
          // },
          // warning: {
          //   main: "#F2BC18",
          // },
          // error: {
          //   main: "#bd0504",
          // },
          // success: {
          //   main: "#00CD67",
          // },
          // info: {
          //   main: "#3D9CCC",
          // },
          // background: {},
        }),
  },

  typography: {
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
      "@media (max-width:650px)": {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
  },
});
