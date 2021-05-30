import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    themeSelect_icon: {
      marginRight: theme.spacing(1.5),
    },
  })
);

export default useStyles;
