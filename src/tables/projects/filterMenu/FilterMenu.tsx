import { useState } from "react";
import {
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
} from "@material-ui/core";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";
import useStyles from "./filterMenu.jss";
import { Controller, Control, UseFormReset } from "react-hook-form";
import { ProjectFiltersSchema } from "hooks";
import { useTranslation } from "react-i18next";

interface IFilterMenuProps {
  control: Control<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
}

export default function FilterMenu({ control, reset }: IFilterMenuProps) {
  const classes = useStyles();
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
        classes={{
          tooltip: classes.tooltip,
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
        <div className={classes.menu}>
          <div className={classes.header}>
            <Typography variant="button">{t("forms.filter")}</Typography>
            <Button color="primary" onClick={handleReset}>
              {t("forms.reset")}
            </Button>
          </div>
          <form noValidate autoComplete="off">
            <Grid container spacing={3} className={classes.form}>
              <Grid item xs={6}>
                <Controller
                  name="id"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="id-filter"
                      label={t("forms.id")}
                      className={classes.field}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="name-filter"
                      label={t("forms.name")}
                      className={classes.field}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <Controller
                  name="location"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="location-filter"
                      label={t("forms.location")}
                      className={classes.field}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes.field}>
                  <InputLabel htmlFor="funded-filter">
                    {t("forms.founded")}
                  </InputLabel>
                  <Controller
                    control={control}
                    name="funded"
                    render={({ field }) => (
                      <Select
                        native
                        inputProps={{
                          name: "funded",
                          id: "funded-filter",
                        }}
                        {...field}
                      >
                        <option value={""}></option>
                        <option value={"true"}>{t("forms.founded")}</option>
                        <option value={"false"}>{t("forms.notFounded")}</option>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </div>
      </Popover>
    </div>
  );
}
