import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  usersTable_paper: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
  usersTable_header: {
    textTransform: "capitalize",
  },
}));

export default useStyles;
