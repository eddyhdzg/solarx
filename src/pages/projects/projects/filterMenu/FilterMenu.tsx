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

interface IFilterMenuProps {
  control: Control<ProjectFiltersSchema>;
  reset: UseFormReset<ProjectFiltersSchema>;
}

export default function FilterMenu({ control, reset }: IFilterMenuProps) {
  const classes = useStyles();
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
      <Tooltip title="Filters">
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
            <Typography variant="button">Filters</Typography>
            <Button color="primary" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <form noValidate autoComplete="off">
            <Grid container spacing={3} className={classes.form}>
              <Grid item xs={6}>
                <Controller
                  name="id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="id-filter"
                      label="ID"
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
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="name-filter"
                      label="Name"
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
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="location-filter"
                      label="Location"
                      className={classes.field}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl className={classes.field}>
                  <InputLabel htmlFor="funded-filter">Funded</InputLabel>
                  <Controller
                    control={control}
                    name="funded"
                    defaultValue={""}
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
                        <option value={"1"}>Funded</option>
                        <option value={"0"}>Not Funded</option>
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
