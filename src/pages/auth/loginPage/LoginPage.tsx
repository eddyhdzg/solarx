import { Typography } from "@material-ui/core";
import { SignInButton } from "components";
import useStyles from "./loginPage.jss";
import logo from "assets/images/Logo.svg";

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={logo}
        height={84}
        width={84}
        alt="login-logo"
        className={classes.logo}
      />
      <Typography
        variant="h6"
        component="h3"
        color="textSecondary"
        className={classes.text}
      >
        Log in to SolarX
      </Typography>
      <SignInButton />
    </div>
  );
}
