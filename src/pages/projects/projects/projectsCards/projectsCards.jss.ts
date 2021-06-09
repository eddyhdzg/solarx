import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  projects_cards: {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
  },
}));

export default useStyles;
