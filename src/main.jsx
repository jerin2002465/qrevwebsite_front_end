import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import VideoUseContext from "./UseContexts/HomeScreenContexts/VideoUseContext.jsx";
import ClientReviewUseContext from "./UseContexts/HomeScreenContexts/ClientReviewUseContext.jsx";
import FounderUseContext from "./UseContexts/AboutScreenContexts/FounderUseContext.jsx";
import ClientLogoUseContext from "./UseContexts/AboutScreenContexts/ClientLogoUseContext.jsx";
import FooterAddressUseContext from "./UseContexts/FooterContexts/FooterAddressUseContext.jsx";
import ContactUseContext from "./UseContexts/ContactScreenContexts/ContactUseContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContactUseContext>
    <FooterAddressUseContext>
      <ClientLogoUseContext>
        <FounderUseContext>
          <ClientReviewUseContext>
            <VideoUseContext>
              <App />
            </VideoUseContext>
          </ClientReviewUseContext>
        </FounderUseContext>
      </ClientLogoUseContext>
    </FooterAddressUseContext>
  </ContactUseContext>
);
