import { useState } from "react";
import { useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { Project, ProjectIDParams } from "types";
import ProjectPrice from "../projectPrice/ProjectPrice";
import { Typography } from "@mui/material";

interface IProjectBuyingOptionsProps {
  roi: Project["roi"];
}

export default function ProjectBuyingOptions({
  roi,
}: IProjectBuyingOptionsProps) {
  const { id } = useParams<ProjectIDParams>();
  const { data } = useProjectPrices(id || "");
  const [expanded, setExpanded] = useState<string | undefined>(undefined);

  const handleChange = (panel: string | undefined) => {
    setExpanded(panel);
  };

  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Crowdfund
      </Typography>

      {data.map((option) => {
        return (
          <ProjectPrice
            key={option.id}
            onClick={handleChange}
            expanded={expanded === option.id}
            roi={roi}
            {...option}
          />
        );
      })}
    </div>
  );
}
