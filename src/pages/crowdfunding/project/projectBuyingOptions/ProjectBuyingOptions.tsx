import { useState } from "react";
import ProjectBuyingOption from "../projectBuyingOption/ProjectBuyingOption";
import { useProjectBuyingOptions } from "hooks";
import { useParams } from "react-router-dom";
import { Project } from "types";

interface ProjectID {
  id?: string;
}

interface IProjectBuyingOptionsProps {
  roi: Project["roi"];
}

export default function ProjectBuyingOptions({
  roi,
}: IProjectBuyingOptionsProps) {
  const { id } = useParams<ProjectID>();
  const { data } = useProjectBuyingOptions(id || "");
  const [expanded, setExpanded] = useState<string | undefined>(undefined);

  const handleChange = (panel: string | undefined) => {
    setExpanded(panel);
  };

  return (
    <div>
      {data.map((option) => {
        return (
          <ProjectBuyingOption
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