import { SnackbarProvider as Provider } from "notistack";

const SnackbarProvider: React.FC = ({ children }) => {
  return <Provider maxSnack={3}>{children}</Provider>;
};

export default SnackbarProvider;
