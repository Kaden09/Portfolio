import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import MainPage from "@/pages/MainPage/MainPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
