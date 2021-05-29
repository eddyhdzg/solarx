import { AppBar as MUIAppbar, Toolbar } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";
import { useCopywriting, useBreadcrumbs } from "hooks";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import useStyles from "./mobileHeader.jss";
import { Link } from "react-router-dom";

const MobileHeader: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const breadcrumbs = useBreadcrumbs();

  return (
    <MUIAppbar
      position="relative"
      color="transparent"
      className={classes.mobileHeader_root}
    >
      <Toolbar className={classes.mobileHeader_toolbar}>
        <div>
          {breadcrumbs.length > 1 && (
            <Button
              color="primary"
              className={classes.mobileHeader_button}
              component={Link}
              to={breadcrumbs[breadcrumbs.length - 2].href}
            >
              <ChevronLeftRoundedIcon />
              {/* {
                copy.routes[breadcrumbs[breadcrumbs.length - 2]?.breadcrumb]
                  ?.title
              } */}
            </Button>
          )}
        </div>

        <Typography className={classes.mobileHeader_text} variant="h4">
          {/* {copy.routes[breadcrumbs[breadcrumbs.length - 1]?.breadcrumb]?.title} */}
        </Typography>
      </Toolbar>
    </MUIAppbar>
  );
};

export default MobileHeader;
