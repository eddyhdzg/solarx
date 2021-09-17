import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletChart_root: {
      width: "100%",
      height: theme.spacing(45),
    },
  })
);

export default useStyles;
