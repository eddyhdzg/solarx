import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center_container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      [theme.breakpoints.up("md")]: {
        height: "calc(100vh - 112px)",
      },
    },
  })
);

export default useStyles;
