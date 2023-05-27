import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import MainRouter from "./router/index";
import { getDesignTokens } from "./theme";

import "./services/i18n";
import { getUserData } from "./utils";
import { get } from "./api";
import { SWRConfig } from "swr";
import useRTL from "./hooks/useRTL";

function App() {
  const Smobile = useMediaQuery("(max-width:350px)");
  const isRTL = useRTL();
  const mode = getUserData() && getUserData().theme;
  const theme = useMemo(() => createTheme(getDesignTokens(mode || "light")), [mode, "light"]);

  return (
    <>
      <SWRConfig value={{ fetcher: get, errorRetryCount: 3 }}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            style={{ width: Smobile ? "200px" : "auto", fontSize: Smobile ? "10px" : "unset", marginTop: "10px" }}
            position={isRTL?.isRtl ? "top-right" : "top-left"}
          />
          <CssBaseline />
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </ThemeProvider>
      </SWRConfig>
    </>
  );
}

export default App;
