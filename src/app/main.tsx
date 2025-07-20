import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import MainPage from "@/pages/MainPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
