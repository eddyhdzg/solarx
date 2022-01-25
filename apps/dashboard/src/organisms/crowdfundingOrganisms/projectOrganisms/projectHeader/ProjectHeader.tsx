import { Project } from "solarx-types";
import { ShareButton } from "components";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import {
  ProjectHeaderRoot,
  ProjectName,
  ProjectHeaderWrapper,
  StyledChip,
  ShareButtonContainer,
} from "./ProjectHeader.styled";

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
    <ProjectHeaderRoot>
      <div>
        <ProjectName variant="h4" component="h3">
          {name}
        </ProjectName>
        <ProjectHeaderWrapper>
          <StyledChip
            label={`${city}, ${state}`}
            variant="yellow"
            icon={<PlaceIcon />}
            size="small"
          />
          <StyledChip
            label={company}
            variant="blue"
            icon={<BusinessRoundedIcon />}
            size="small"
          />
          <StyledChip
            label={businessType}
            variant="green"
            icon={<WorkOutlineRoundedIcon />}
            size="small"
          />
        </ProjectHeaderWrapper>
      </div>

      <ShareButtonContainer>
        <ShareButton />
      </ShareButtonContainer>
    </ProjectHeaderRoot>
  );
};

export default ProjectHeader;
