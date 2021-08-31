import { Typography } from "@material-ui/core";
import { Project } from "types";
import { ColorChip, ShareButton } from "components";
import useStyles from "./projectHeader.jss";
import PlaceIcon from "@material-ui/icons/Place";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";

type IProjectHeader = Pick<
  Project,
  "id" | "name" | "city" | "state" | "businessType" | "company"
>;

const ProjectHeader: React.FC<IProjectHeader> = ({
  name,
  city,
  state,
  businessType,
  company,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.projectHeader_root}>
      <div>
        <Typography
          variant="h5"
          component="h2"
          className={classes.projectHeader_title}
        >
          {name}
        </Typography>
        <div className={classes.projectHeader_chips}>
          <ColorChip
            label={`${city}, ${state}`}
            color="yellow"
            icon={<PlaceIcon />}
          />
          <ColorChip
            label={company}
            color="blue"
            icon={<BusinessRoundedIcon />}
          />
          <ColorChip
            label={businessType}
            color="green"
            icon={<WorkOutlineRoundedIcon />}
          />
        </div>
      </div>

      <div className={classes.projectHeader_button}>
        <ShareButton />
      </div>
    </div>
  );
};

export default ProjectHeader;
