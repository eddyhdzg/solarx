import { Box, Chip } from "@mui/material";
import { useRouterState } from "hooks";
import { stringToBoolean } from "utils";
import { useTranslation } from "react-i18next";

export default function ProjectFilterChips() {
  const { t } = useTranslation();
  const {
    values: { funded = "", basePriceFrom = "", basePriceTo = "" },
    onReset,
  } = useRouterState();

  const handleDelete = (field: string) => () => {
    onReset([field]);
  };

  const handleDeleteMultiple = (fields: string[]) => {
    onReset(fields);
  };

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        ml: 0.5,
      }}
    >
      {funded && (
        <li>
          <Chip
            label={
              stringToBoolean(funded.toString())
                ? t("projects.funded")
                : t("projects.notFunded")
            }
            onDelete={handleDelete("funded")}
            sx={{
              ml: 0.5,
              mb: 0.5,
            }}
          />
        </li>
      )}

      {Boolean(basePriceFrom) && Boolean(basePriceTo) && (
        <li>
          <Chip
            label={`$${basePriceFrom} MXN - $${basePriceTo} MXN`}
            onDelete={() => {
              handleDeleteMultiple(["basePriceTo", "basePriceFrom"]);
            }}
            sx={{
              ml: 0.5,
              mb: 0.5,
            }}
          />
        </li>
      )}
    </Box>
  );
}
