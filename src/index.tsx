import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "router/Router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ProvidersWrapper } from "providers";
import "locales/i18n";

ReactDOM.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <Router />
    </ProvidersWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
