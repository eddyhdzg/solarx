import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  breadcrumb_ol: {
    flexWrap: "nowrap",
  },
  breadcrumb_li: {
    "& a": {
      textDecoration: "none",
    },
  },
}));

export default useStyles;
