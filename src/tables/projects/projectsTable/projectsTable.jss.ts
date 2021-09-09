import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  projectsTable_paper: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
  projectsTable_header: {
    textTransform: "capitalize",
  },
}));

export default useStyles;
