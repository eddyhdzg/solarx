import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      width: "100%",
      maxWidth: "60rem",
    },
  })
);

export default useStyles;
