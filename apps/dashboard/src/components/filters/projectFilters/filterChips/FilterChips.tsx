import { useRouterState } from "hooks";
import { stringToBoolean } from "utils";
import { useTranslation } from "react-i18next";
import { StyledUl, StyledChip } from "./FilterChips.styled";

export default function FilterChips() {
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
    <StyledUl>
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

      {Boolean(basePriceFrom) && Boolean(basePriceTo) && (
        <li>
          <StyledChip
            label={`$${basePriceFrom} MXN - $${basePriceTo} MXN`}
            onDelete={() => {
              handleDeleteMultiple(["basePriceTo", "basePriceFrom"]);
            }}
          />
        </li>
      )}
    </StyledUl>
  );
}
