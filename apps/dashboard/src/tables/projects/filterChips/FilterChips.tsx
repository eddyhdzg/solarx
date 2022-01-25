import { useRouterState } from "hooks";
import { stringToBoolean } from "utils";
import { useTranslation } from "react-i18next";
import { StyledUl, StyledChip } from "./FilterChips.styled";

export default function FilterChips() {
  const { t } = useTranslation();
  const {
    values: { id = "", name = "", location = "", funded = "" },
    onReset,
  } = useRouterState();

  const handleDelete = (field: string) => () => {
    onReset([field]);
  };

  return (
    <StyledUl>
      {id && (
        <li>
          <StyledChip label={id} onDelete={handleDelete("id")} />
        </li>
      )}

      {name && (
        <li>
          <StyledChip label={name} onDelete={handleDelete("name")} />
        </li>
      )}

      {location && (
        <li>
          <StyledChip label={location} onDelete={handleDelete("location")} />
        </li>
      )}

      {funded && (
        <li>
          <StyledChip
            label={
              stringToBoolean(funded.toString())
                ? t("projects.funded")
                : t("projects.notFunded")
            }
            onDelete={handleDelete("funded")}
          />
        </li>
      )}
    </StyledUl>
  );
}
