import { Button } from "components";
import { useAuth } from "reactfire";
import useStyles from "./session.jss";

export default function Session() {
  const auth = useAuth();
  const classes = useStyles();

  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <Button
      variant="outlined"
      onClick={() => handleLogOut()}
      color="default"
      size="large"
      className={classes.button}
    >
      Log Out
    </Button>
  );
}
