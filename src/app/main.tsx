import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import MainPage from "@/pages/MainPage";
import Silk from "@/shared/ui/components/Silk";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Silk
          speed={5}
          scale={1}
          color="#384fffff"
          noiseIntensity={1.5}
          rotation={0}
        />
    </div>
  </StrictMode>,
);
