import { useState } from "react";
import {
  Divider,
  Typography,
  Grid,
  Button,
  InputLabel,
  SelectChangeEvent,
  Select,
  Box,
  Paper,
} from "@mui/material";
import { GridItem } from "atomic";
import { useTranslation } from "react-i18next";
import { useRole, usePrivateProjects } from "hooks";
import { moderatorArray } from "constant";
import { useFunctions } from "reactfire";
import { httpsCallable } from "firebase/functions";
import { useSnackbar } from "notistack";
import { Item, StyledFormControl } from "./LocalTriggers.styled";

export default function LocalTriggers() {
  const [pid, setPid] = useState("");
  const role = useRole();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const functions = useFunctions();
  const { data: projects } = usePrivateProjects();
  const handleChange = (e: SelectChangeEvent) => {
    setPid(e.target?.value);
  };

  const createLocalProject = httpsCallable(functions, "createLocalProject_v0");
  const createLocalPrices = httpsCallable(functions, "createLocalPrices_v0");

  const handleCreateLocalProject = () => {
    createLocalProject()
      .then(() => {
        enqueueSnackbar(t("snackbar.projectCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotCreated"), {
          variant: "error",
        });
      });
  };
  const handleCreateLocalPrices = () => {
    createLocalPrices({ id: pid })
      .then(() => {
        enqueueSnackbar(t("snackbar.projectCreated"), {
          variant: "success",
        });
      })
      .catch(() => {
        enqueueSnackbar(t("snackbar.projectNotCreated"), {
          variant: "error",
        });
      });
  };

  return (
    <Paper>
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Typography variant="subtitle1">
          {t("pages.admin.local.triggers")}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Grid container spacing={3}>
          <GridItem sm={5}>
            <Typography variant="body2">
              {t("pages.admin.local.createProducts")}
            </Typography>
          </GridItem>
          <Item sm={7}>
            <Button
              size="large"
              variant="contained"
              disabled={!moderatorArray.has(role)}
              onClick={() => {
                handleCreateLocalProject();
              }}
            >
              {t("pages.admin.local.createProduct")}
            </Button>
          </Item>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 2,
          px: 3,
        }}
      >
        <Grid container spacing={3}>
          <GridItem sm={5}>
            <Typography variant="body2">
              {t("pages.admin.local.create3Prices")}
            </Typography>
          </GridItem>
          <Item sm={7}>
            {Boolean(projects?.length) && (
              <StyledFormControl>
                <InputLabel htmlFor="project-select">Project</InputLabel>
                <Select
                  id="project-select"
                  label="Project"
                  variant="outlined"
                  native
                  value={pid}
                  onChange={(e) => handleChange(e)}
                >
                  <option aria-label="None" value="" />
                  {projects.map((project) => {
                    return (
                      <option key={project?.id} value={project?.id}>
                        {project?.name}
                      </option>
                    );
                  })}
                </Select>
              </StyledFormControl>
            )}

            <Button
              size="large"
              variant="contained"
              disabled={!moderatorArray.has(role) || !pid}
              onClick={() => {
                handleCreateLocalPrices();
              }}
            >
              {t("pages.admin.local.createPrices")}
            </Button>
          </Item>
        </Grid>
      </Box>
    </Paper>
  );
}
