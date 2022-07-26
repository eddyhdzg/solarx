import { styled, alpha } from "@mui/material";

export const Root = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({ open }: { open: boolean }) => ({
  backgroundColor: open ? alpha(theme.palette.common.white, 0.05) : undefined,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  width: "100%",
}));

export const FormContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CardContainer = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ButtonContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: "flex",
  justifyContent: "flex-end",
}));

interface ProjectCheckoutCC {
  Root: React.FC<React.DOMAttributes<HTMLDivElement> & { open: boolean }>;
  FormContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
  CardContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
  ButtonContainer: React.FC<React.DOMAttributes<HTMLDivElement>>;
}

const ProjectCheckout: React.FC & ProjectCheckoutCC = ({ children }) => {
  return <>{children}</>;
};

ProjectCheckout.Root = Root;
ProjectCheckout.FormContainer = FormContainer;
ProjectCheckout.CardContainer = CardContainer;
ProjectCheckout.ButtonContainer = ButtonContainer;

export default ProjectCheckout;
