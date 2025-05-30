import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-0ix2qvddfhygglan.jp.auth0.com"
    clientId="3wVk9WxAHllyoDD2aaC8b5uvmBz1SnOc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </StrictMode>
);
