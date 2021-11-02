import { styled, Grid, GridProps } from "@mui/material";
import { GridItem } from "components";

const Root = styled("div")(({ theme }) => ({
  overflowY: "clip",
  position: "relative",
  marginLeft: theme.spacing(-2),
  marginRight: theme.spacing(-2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginBottom: theme.spacing(-2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(-3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(-3),
    paddingBottom: theme.spacing(3),
  },
}));
const HeaderGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const GreyBackground = styled("div")(({ theme }) => ({
  backgroundImage: theme.custom.elevation[0],
  width: "100%",
  minHeight: "1000vh",
  position: "absolute",
  left: 0,
}));

const Tabs = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: 80,
  top: theme.spacing(-5),
  [theme.breakpoints.up("lg")]: {
    marginTop: 120,
  },
}));

const Sticky = styled(GridItem)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    position: "sticky",
    top: theme.spacing(10),
    maxHeight: "100vh",
    overflowY: "auto",
  },
}));

const StickyContent = styled("div")(({ theme }) => ({
  maxWidth: theme.spacing(60),
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("lg")]: {
    paddingBottom: theme.spacing(15),
  },
}));

interface ISegmentedControlCompoundComponents {
  HeaderGrid: React.FC<GridProps>;
  GreyBackground: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Sticky: React.FC<GridProps>;
  StickyContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

const Project: React.FC<React.HTMLAttributes<HTMLDivElement>> &
  ISegmentedControlCompoundComponents = (props) => {
  return <Root {...props} />;
};

Project.HeaderGrid = HeaderGrid;
Project.GreyBackground = GreyBackground;
Project.Tabs = Tabs;
Project.Sticky = Sticky;
Project.StickyContent = StickyContent;

export default Project;
