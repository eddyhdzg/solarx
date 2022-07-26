import { styled, Grid, GridProps } from "@mui/material";
import { GridItem } from "atomic";

const Background = styled("div")(({ theme }) => ({
  backgroundImage: theme.custom.elevation[0],
}));

const HeaderGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const PrimaryContent = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(8),
}));

const BodyGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    paddingRight: theme.spacing(0),
  },
}));

const Tabs = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  [theme.breakpoints.up("lg")]: {
    marginTop: 0,
    position: "relative",
    top: "-67px",
  },
}));

const Sticky = styled(GridItem)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    position: "sticky",
    top: theme.spacing(5),
    paddingBottom: theme.spacing(7),
    maxHeight: "100vh",
    overflowY: "overlay",
    "&::-webkit-scrollbar": {
      width: 10,
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      backgroundColor: "transparent",
    },
    "&:hover": {
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.divider,
      },
    },
  },
}));

const MaxWidth = styled("div")(({ theme }) => ({
  maxWidth: theme.spacing(60),
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "unset",
    marginRight: "auto",
  },
}));

interface ISegmentedControlCompoundComponents {
  Background: React.FC<React.DOMAttributes<HTMLDivElement>>;
  HeaderGrid: React.FC<GridProps>;
  PrimaryContent: React.FC<GridProps>;
  BodyGrid: React.FC<GridProps>;
  Tabs: React.FC<React.DOMAttributes<HTMLDivElement>>;
  Sticky: React.FC<GridProps>;
  MaxWidth: React.FC<React.DOMAttributes<HTMLDivElement>>;
}

const Project: React.FC<React.DOMAttributes<HTMLDivElement>> &
  ISegmentedControlCompoundComponents = ({ children }) => {
  return <>{children}</>;
};

Project.Background = Background;
Project.HeaderGrid = HeaderGrid;
Project.PrimaryContent = PrimaryContent;
Project.BodyGrid = BodyGrid;
Project.Tabs = Tabs;
Project.Sticky = Sticky;
Project.MaxWidth = MaxWidth;

export default Project;
