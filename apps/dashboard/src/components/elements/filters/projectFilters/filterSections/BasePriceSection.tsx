import { useState, useEffect } from "react";
import { Box, Typography, Slider } from "@mui/material";
import { useRouterState } from "hooks";
import { formatNumber } from "utils";
import { useTranslation } from "react-i18next";

function valuetext(value: number) {
  return `$${value}`;
}

function valueLabelFormat(value: number) {
  return `$${formatNumber(value)}`;
}

export default function BasePriceSection() {
  const { t } = useTranslation();
  const [values, setValues] = useState<number[]>([0, 2000]);
  const {
    values: { basePriceFrom = "", basePriceTo = "" },
    onSliderChange,
  } = useRouterState();

  const handleChange = (_: Event, value: number | number[]) => {
    // @ts-ignore
    setValues([value[0], value[1]]);
  };

  const handleBlur = (
    _: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    onSliderChange("basePrice", value as number[]);
  };

  useEffect(() => {
    const from = basePriceFrom ? Number(basePriceFrom) : 0;
    const to = basePriceTo ? Number(basePriceTo) : 2000;
    setValues([from, to]);
  }, [basePriceFrom, basePriceTo]);

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
        {t("projects.basePrice")}
      </Typography>
      <Box
        sx={{
          px: 2,
        }}
      >
        <Slider
          className="noselect"
          name="basePrice"
          getAriaLabel={() => t("filters.basePriceRange")}
          value={values}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          onChangeCommitted={handleBlur}
          max={2000}
        />
      </Box>
    </Box>
  );
}
