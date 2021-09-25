import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Fade,
  Popover,
  IconButton,
  Tooltip,
  Select,
  FormControl,
  TextField,
  InputLabel,
  Grid,
  OutlinedInput,
} from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { Controller, Control, UseFormReset } from "react-hook-form";
import { ProjectFiltersSchema } from "hooks";
import { useTranslation } from "react-i18next";
import { GridItem } from "components";

interface IFilterMenuProps {
  control: Control<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
}

export default function FilterMenu({ control, reset }: IFilterMenuProps) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    reset({ id: "", funded: "", location: "", name: "" });
  };

  return (
    <div>
      <Tooltip
        title={t("forms.filter")}
        sx={{
          textTransform: "capitalize",
        }}
      >
        <IconButton
          aria-label="project filter menu"
          aria-controls="project-filter-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FilterListRoundedIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            pt: 2,
            px: 3,
            pb: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography variant="button">{t("forms.filter")}</Typography>
            <Button color="primary" onClick={handleReset}>
              {t("forms.reset")}
            </Button>
          </Box>
          <form noValidate autoComplete="off">
            <Grid
              container
              spacing={3}
              sx={{
                maxWidth: (theme) => theme.spacing(60),
              }}
            >
              <GridItem xs={6}>
                <Controller
                  name="id"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="id-filter"
                      label={t("forms.id")}
                      fullWidth
                      {...field}
                    />
                  )}
                />
              </GridItem>
              <GridItem xs={6}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="name-filter"
                      label={t("forms.name")}
                      fullWidth
                      {...field}
                    />
                  )}
                />
              </GridItem>

              <GridItem xs={6}>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="location-filter"
                      label={t("forms.location")}
                      fullWidth
                      {...field}
                    />
                  )}
                />
              </GridItem>
              <GridItem xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="funded-filter">
                    {t("forms.founded")}
                  </InputLabel>
                  <Controller
                    control={control}
                    name="funded"
                    render={({ field }) => (
                      <Select
                        native
                        input={
                          <OutlinedInput
                            name="funded"
                            label={t("forms.founded")}
                            id="funded-filter"
                          />
                        }
                        {...field}
                      >
                        <option value={""} />
                        <option value={"true"}>{t("forms.founded")}</option>
                        <option value={"false"}>{t("forms.notFounded")}</option>
                      </Select>
                    )}
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </form>
        </Box>
      </Popover>
    </div>
  );
}
