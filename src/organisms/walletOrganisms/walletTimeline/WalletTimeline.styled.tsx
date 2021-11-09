import { styled, Paper as MUIPaper } from "@mui/material";

const Paper = styled(MUIPaper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ButtonGroupContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexGrow: 1,
});

interface IWalletTimelineCompoundComponents {
  Paper: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  ButtonGroupContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

const WalletTimeline: React.FC & IWalletTimelineCompoundComponents = ({
  children,
}) => {
  return <>{children}</>;
};

WalletTimeline.Paper = Paper;
WalletTimeline.ButtonGroupContainer = ButtonGroupContainer;

export default WalletTimeline;
