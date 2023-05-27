import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import MainRouter from "./router/index";
import { getDesignTokens } from "./theme";

import "./services/i18n";
import { getUserData } from "./utils";

function App() {
  const mode = getUserData().theme;
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer style={{ width: "auto" }} position="top-right" />
        <CssBaseline />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
