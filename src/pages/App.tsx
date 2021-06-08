import Router from "routes/Router";
import { ProvidersWrapper } from "providers";

export default function App() {
  return (
    <ProvidersWrapper>
      <Router />
    </ProvidersWrapper>
  );
}
