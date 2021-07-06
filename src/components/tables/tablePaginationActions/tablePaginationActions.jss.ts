import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tablePaginationActions_root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
);

export default useStyles;
