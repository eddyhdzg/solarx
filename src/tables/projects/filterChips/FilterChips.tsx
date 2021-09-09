import Chip from "@material-ui/core/Chip";
import useStyles from "./filterChips.jss";
import { UseFormWatch, UseFormReset } from "react-hook-form";
import { ProjectFiltersSchema } from "hooks";
import { stringToBoolean } from "utils";
import { useTranslation } from "react-i18next";

interface IFilterChipsProps {
  watch: UseFormWatch<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
}

export default function FilterChips({ watch, reset }: IFilterChipsProps) {
  const watchAllField = watch();
  const { t } = useTranslation();
  const classes = useStyles();

  const handleDelete = (field: string) => () => {
    reset({ ...watchAllField, [field]: "" });
  };

  return (
    <ul className={classes.root}>
      {watchAllField.id && (
        <li>
          <Chip
            label={watchAllField.id}
            onDelete={handleDelete("id")}
            className={classes.chip}
          />
        </li>
      )}

      {watchAllField.name && (
        <li>
          <Chip
            label={watchAllField.name}
            onDelete={handleDelete("name")}
            className={classes.chip}
          />
        </li>
      )}

      {watchAllField.location && (
        <li>
          <Chip
            label={watchAllField.location}
            onDelete={handleDelete("location")}
            className={classes.chip}
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
            className={classes.chip}
          />
        </li>
      )}
    </ul>
  );
}
