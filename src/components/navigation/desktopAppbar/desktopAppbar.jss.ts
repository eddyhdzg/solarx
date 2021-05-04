import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "types";
import { drawerWidth } from "constant";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    desktopAppbar_drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    desktopAppbar_drawerPaper: {
      width: `calc(${drawerWidth}px + env(safe-area-inset-left))`,
      overflowX: "hidden",
      backgroundColor: palette.background.default,
      flexDirection: "row",
      paddingTop: "env(safe-area-inset-top)",
    },
  })
);

export default useStyles;
