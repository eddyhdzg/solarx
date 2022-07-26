import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useRouterState } from "hooks";
import { useTranslation } from "react-i18next";

export default function FundedSection() {
  const { t } = useTranslation();
  const {
    values: { funded = "" },
    onSelectChange,
  } = useRouterState();

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
        }}
      >
        {t("forms.founded")}
      </Typography>
      <FormControl fullWidth>
        <InputLabel htmlFor="funded-filter">{t("forms.founded")}</InputLabel>
        <Select
          id="funded"
          name="funded"
          native
          value={funded as string}
          input={
            <OutlinedInput
              name="funded"
              label={t("forms.founded")}
              id="funded-filter"
            />
          }
          onChange={onSelectChange}
        >
          <option value={""} />
          <option value={"true"}>{t("forms.founded")}</option>
          <option value={"false"}>{t("forms.notFounded")}</option>
        </Select>
      </FormControl>
    </Box>
  );
}
