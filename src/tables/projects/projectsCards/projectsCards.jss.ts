import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projects_cards: {
      display: "grid",
      gridGap: "1rem",
      gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
    },
    projects_pagination: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export default useStyles;
