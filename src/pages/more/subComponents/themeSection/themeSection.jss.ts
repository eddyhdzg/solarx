import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    themeSection_selectContainer: {
      marginBottom: theme.spacing(1),
    },
  })
);

export default useStyles;
