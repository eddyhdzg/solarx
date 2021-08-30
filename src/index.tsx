import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "routes/Router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ProvidersWrapper } from "providers";

ReactDOM.render(
  <React.StrictMode>
    <ProvidersWrapper>
      <Router />
    </ProvidersWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
