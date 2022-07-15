import { useState } from "react";
import { useProjectPrices } from "hooks";
import { useParams } from "react-router-dom";
import { Project, ProjectIDParams, ProjectPrice } from "solarx-types";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProjectPriceComponent from "../projectPrice/ProjectPrice";

interface IProjectBuyingOptionsProps {
  roi: Project["roi"];
}

export default function ProjectBuyingOptions({
  roi,
}: IProjectBuyingOptionsProps) {
  const { id = "" } = useParams<ProjectIDParams>();
  const { data } = useProjectPrices(id);
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | undefined>(undefined);
  const handleChange = (panel: string | undefined) => {
    setExpanded(panel);
  };

  const reduced = data.reduce<[ProjectPrice[], ProjectPrice[]]>(
    (prev, curr) => {
      if ((curr?.sharesSold || 0) >= (curr?.quantity || 0)) {
        return [prev[0], [...prev[1], curr]];
      } else {
        return [[...prev[0], curr], prev[1]];
      }
    },
    [[], []]
  );

  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        {t("pages.crowdfunding.project.crowdfund")}
      </Typography>

      {reduced[0].map((option) => {
        return (
          <ProjectPriceComponent
            key={option.id}
            onClick={handleChange}
            expanded={expanded === option.id}
            roi={roi}
            {...option}
          />
        );
      })}

      {Boolean(reduced[1].length) && (
        <>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
            }}
          >
            {t("pages.crowdfunding.project.allGone")}
          </Typography>

          {reduced[1].map((option) => {
            return (
              <ProjectPriceComponent
                key={option.id}
                onClick={handleChange}
                expanded={expanded === option.id}
                roi={roi}
                {...option}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
