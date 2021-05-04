import { CircularProgress } from "@material-ui/core";
import useStyles from './centerLoader.jss'

const CenterLoader: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.center_container}>
      <CircularProgress />
    </div>
  );
};

export default CenterLoader;
