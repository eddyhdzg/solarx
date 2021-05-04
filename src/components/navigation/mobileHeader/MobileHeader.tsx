import { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useCopywriting, useBreadcrumbs } from "hooks";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import useStyles from "./mobileHeader.jss";
import { Link } from "react-router-dom";

const MobileHeader: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const [title, setTitle] = useState("Loading...");
  const breadkcrumbs = useBreadcrumbs();

  useEffect(() => {
    if (breadkcrumbs.length === 0) return setTitle("Error");
    if (breadkcrumbs.length === 1) return setTitle(breadkcrumbs[0].breadcrumb);
    return setTitle(breadkcrumbs[1].breadcrumb);
  }, [breadkcrumbs]);

  return (
    <div className={classes.mobileHeader_container}>
      {breadkcrumbs.length > 1 && (
        <Button
          color="primary"
          className={classes.mobileHeader_button}
          component={Link}
          to={breadkcrumbs[breadkcrumbs.length - 2].href}
        >
          <ChevronLeftRoundedIcon />
          {
            copy.routes[breadkcrumbs[breadkcrumbs.length - 2]?.breadcrumb]
              ?.title
          }
        </Button>
      )}

      <Typography className={classes.mobileHeader_text} variant="h4">
        {title}
      </Typography>
    </div>
  );
};

export default MobileHeader;
