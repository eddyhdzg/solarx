import { Box, Chip, Typography } from "@mui/material";
import { Project } from "types";
import { ShareButton } from "components";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <div>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 1.5,
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Chip
            label={`${city}, ${state}`}
            variant="yellow"
            icon={<PlaceIcon />}
            size="small"
            sx={{
              py: 2,
              px: 1,
              m: 0.5,
            }}
          />
          <Chip
            label={company}
            variant="blue"
            icon={<BusinessRoundedIcon />}
            size="small"
            sx={{
              py: 2,
              px: 1,
              m: 0.5,
            }}
          />
          <Chip
            label={businessType}
            variant="green"
            icon={<WorkOutlineRoundedIcon />}
            size="small"
            sx={{
              py: 2,
              px: 1,
              m: 0.5,
            }}
          />
        </Box>
      </div>

      <Box
        sx={{
          ml: 0.5,
        }}
      >
        <ShareButton />
      </Box>
    </Box>
  );
};

export default ProjectHeader;
