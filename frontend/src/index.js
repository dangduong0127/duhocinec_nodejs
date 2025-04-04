import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthenWrapper } from "./hooks/Context/auth.context";
import i18n from "./utils/i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <AuthenWrapper>
      <App />
    </AuthenWrapper>
  </I18nextProvider>
);
