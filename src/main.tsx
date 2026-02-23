import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SmoothScrollProvider } from "./context/SmoothScroll/SmoothScrollContext.tsx";

createRoot(document.getElementById("root")!).render(
  <SmoothScrollProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </SmoothScrollProvider>,
);
