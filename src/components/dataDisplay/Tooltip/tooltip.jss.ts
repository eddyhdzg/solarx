import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles(({ palette }: Theme) => ({
  tooltip: {
    color: palette.text.primary,
    backgroundColor:
      palette.type === "light" ? palette.common.white : palette.common.black,
    borderWidth: 2,
    borderColor: palette.divider,
    borderStyle: "solid",
  },
}));

export default useStyles;
