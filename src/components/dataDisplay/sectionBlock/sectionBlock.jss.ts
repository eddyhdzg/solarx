import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionBlock_row: {
      padding: theme.spacing(2, 3),
    },
  })
);

export default useStyles;
