import { UseFormWatch, UseFormReset } from "react-hook-form";
import { ProjectFiltersSchema } from "hooks";
import { stringToBoolean } from "utils";
import { useTranslation } from "react-i18next";
import { Box, Chip } from "@mui/material";

interface IFilterChipsProps {
  watch: UseFormWatch<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
}

export default function FilterChips({ watch, reset }: IFilterChipsProps) {
  const watchAllField = watch();
  const { t } = useTranslation();

  const handleDelete = (field: string) => () => {
    reset({ ...watchAllField, [field]: "" });
  };

  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: {
          xxs: 0,
          xs: 1,
        },
      }}
    >
      {watchAllField.id && (
        <li>
          <Chip
            label={watchAllField.id}
            onDelete={handleDelete("id")}
            sx={{
              m: 0.5,
            }}
          />
        </li>
      )}

      {watchAllField.name && (
        <li>
          <Chip
            label={watchAllField.name}
            onDelete={handleDelete("name")}
            sx={{
              m: 0.5,
            }}
          />
        </li>
      )}

      {watchAllField.location && (
        <li>
          <Chip
            label={watchAllField.location}
            onDelete={handleDelete("location")}
            sx={{
              m: 0.5,
            }}
          />
        </li>
      )}

      {watchAllField.funded && (
        <li>
          <Chip
            label={
              stringToBoolean(watchAllField.funded)
                ? t("projects.funded")
                : t("projects.notFunded")
            }
            onDelete={handleDelete("funded")}
            sx={{
              m: 0.5,
            }}
          />
        </li>
      )}
    </Box>
  );
}
