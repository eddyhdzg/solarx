import { useState } from "react";
import {
  Button,
  Typography,
  IconButton,
  Select,
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useTranslation } from "react-i18next";
import { GridItem } from "components";
import {
  StyledTooltip,
  Content,
  Header,
  StyledGrid,
  StyledPopover,
} from "./FilterMenu.styled";
import { useRouterState } from "hooks";

export default function FilterMenu() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {
    values: { id = "", name = "", location = "", funded = "" },
    onInputChange,
    onSelectChange,
    onReset,
  } = useRouterState();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    onReset(["id", "name", "location", "funded"]);
  };

  return (
    <div>
      <StyledTooltip
        title={t("forms.filters", {
          postProcess: "capitalize",
        })}
      >
        <IconButton
          aria-label="project filter menu"
          aria-controls="project-filter-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FilterListRoundedIcon />
        </IconButton>
      </StyledTooltip>
      <StyledPopover
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Content>
          <Header>
            <Typography variant="button">
              {t("forms.filters", {
                postProcess: "capitalize",
              })}
            </Typography>
            <Button color="primary" onClick={handleReset}>
              {t("forms.reset", {
                postProcess: "capitalize",
              })}
            </Button>
          </Header>
          <form noValidate autoComplete="off">
            <StyledGrid container spacing={3}>
              <GridItem xs={6}>
                <TextField
                  id="id"
                  name="id"
                  label={t("forms.id")}
                  fullWidth
                  value={id}
                  onChange={onInputChange}
                />
              </GridItem>
              <GridItem xs={6}>
                <TextField
                  id="name"
                  name="name"
                  label={t("forms.name")}
                  fullWidth
                  value={name}
                  onChange={onInputChange}
                />
              </GridItem>
              <GridItem xs={6}>
                <TextField
                  id="location"
                  name="location"
                  label={t("forms.location")}
                  fullWidth
                  value={location}
                  onChange={onInputChange}
                />
              </GridItem>
              <GridItem xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="funded-filter">
                    {t("forms.founded")}
                  </InputLabel>
                  <Select
                    id="funded"
                    name="funded"
                    native
                    value={funded}
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
              </GridItem>
            </StyledGrid>
          </form>
        </Content>
      </StyledPopover>
    </div>
  );
}
