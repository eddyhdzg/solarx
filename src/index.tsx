import React from "react";
import ReactDOM from "react-dom";
import Router from "router/Router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ProvidersWrapper } from "providers";
import "locales/i18n";
import "react-notion/src/styles.css";
import "assets/styles/index.scss";
import "assets/styles/mui.scss";
import "assets/styles/notion.scss";
import "assets/styles/recharts.scss";

ReactDOM.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <Router />
    </ProvidersWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
