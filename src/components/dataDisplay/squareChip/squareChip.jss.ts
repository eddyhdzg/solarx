import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, { color: string; backgroundColor: string }>(
  (theme: Theme) =>
    createStyles({
      squareChip_root: {
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 3,
        color: (props) => props.color,
        backgroundColor: (props) => props.backgroundColor,
      },
    })
);

export default useStyles;
