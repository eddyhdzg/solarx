import useClipboard from "react-use-clipboard";
import { Tooltip, Typography, Button } from "@material-ui/core";
import { useLocation } from "react-router";
import useStyles from "./projectHeader.jss";
import ContentCopyIcon from "@material-ui/icons/ContentCopy";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { Project } from "types";

type IProjectHeader = Pick<Project, "id" | "name" | "city" | "state">;

const ProjectHeader: React.FC<IProjectHeader> = ({ name, city, state }) => {
  const location = useLocation();
  const [isCopied, setCopied] = useClipboard(
    "https://solarx.app" + location.pathname,
    {
      successDuration: 2000,
    }
  );
  const classes = useStyles();

  return (
    <div className={classes.projectHeader_header}>
      <div>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="subtitle2">
          {city}, {state}
        </Typography>
      </div>
      <div className={classes.projectHeader_buttonsContainer}>
        <Tooltip
          arrow
          leaveTouchDelay={3000}
          enterTouchDelay={0}
          title={isCopied ? "Copied to clipboard ✅" : "Copy to clipboard"}
          onClick={setCopied}
        >
          <Button
            color="default"
            className={classes.projectHeader_shareButton}
            size="small"
          >
            Copy URL
            <ContentCopyIcon className={classes.projectHeader_icon} />
          </Button>
        </Tooltip>

        <Button color="default" size="small">
          Save
          <FavoriteBorderRoundedIcon className={classes.projectHeader_icon} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectHeader;
