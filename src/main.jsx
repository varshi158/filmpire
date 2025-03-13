import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./components/App.jsx";

const theme = createTheme({});

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);




