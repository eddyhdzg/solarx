import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ProvidersWrapper } from "providers";
import "locales/i18n";
import "assets/styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
