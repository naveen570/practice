import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ProviderWrapper } from "./provider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderWrapper>
  </StrictMode>
);
