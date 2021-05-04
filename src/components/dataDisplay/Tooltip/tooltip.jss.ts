import { makeStyles } from "@material-ui/core";
import { Theme } from "types";

const useStyles = makeStyles(({ palette }: Theme) => ({
  tooltip: {
    color: palette.text.primary,
    backgroundColor:
      palette.type === "light" ? palette.common.white : palette.common.black,
    textTransform: "capitalize",
    borderWidth: 2,
    borderColor: palette.divider,
    borderStyle: "solid",
  },
}));

export default useStyles;
