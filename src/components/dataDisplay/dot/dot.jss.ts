import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useDotStyles = makeStyles<Theme, { color: string }>((theme: Theme) =>
  createStyles({
    walletHistory_dot: {
      marginRight: theme.spacing(1),
      height: theme.spacing(1),
      width: theme.spacing(1),
      backgroundColor: (props) => props.color,
      borderRadius: "50%",
      display: "inline-block",
    },
  })
);

export default useDotStyles;
