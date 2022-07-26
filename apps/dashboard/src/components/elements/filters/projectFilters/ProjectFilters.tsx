import { Box, Typography, alpha } from "@mui/material";
import FilterDrawer from "./FilterDrawer";
import FundedSection from "./filterSections/FundedSection";
import BasePriceSection from "./filterSections/BasePriceSection";
import ProjectFilterChips from "./projectFilterChips/ProjectFilterChips";
import { useTranslation } from "react-i18next";

interface ProjectFiltersProps {
  count: number;
}

export default function ProjectFilters(props: ProjectFiltersProps) {
  const { t } = useTranslation();
  return (
    <FilterDrawer {...props}>
      <Box
        sx={[
          {
            display: "flex",
            p: 2,
            alignItems: "center",
          },
          (theme) => ({
            backgroundColor: alpha(theme.palette.common.black, 0.5),
          }),
        ]}
      >
        <Typography
          variant="subtitle1"
          sx={{
            py: 2,
          }}
        >
          {t("filters.selected")}
        </Typography>
        <ProjectFilterChips />
      </Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <FundedSection />
        <BasePriceSection />
      </Box>
    </FilterDrawer>
  );
}
