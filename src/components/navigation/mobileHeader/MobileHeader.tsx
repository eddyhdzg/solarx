import { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useCopywriting } from "hooks";
import { Query } from "types";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import useStyles from "./mobileHeader.jss";

const MobileHeader: React.FC = () => {
  const classes = useStyles();
  // const { query, isReady, back } = useRouter();
  // const { section, subSection } = query as Query;
  // const copy = useCopywriting();
  const [title, setTitle] = useState("Loading...");

  // useEffect(() => {
  //   if (section && subSection) return setTitle(subSection);
  //   if (section) return setTitle(copy.routes[section].title);
  //   return setTitle("Error");
  // }, [section, subSection, isReady]);

  return (
    <div className={classes.mobileHeader_container}>
      {/* {section && subSection && (
        <Button
          color="primary"
          className={classes.mobileHeader_button}
          onClick={() => back()}
        >
          <ChevronLeftRoundedIcon />
          {section}
        </Button>
      )} */}
      <Typography className={classes.mobileHeader_text} variant="h4">
        {title}
      </Typography>
    </div>
  );
};

export default MobileHeader;
