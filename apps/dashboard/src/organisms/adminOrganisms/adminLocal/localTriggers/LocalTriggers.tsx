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
  FormControl,
} from "@mui/material";
import { GridItem } from "components";
import {
  useRole,
  usePrivateProjects,
  useHandleCreateLocalPrices,
  useHandleCreateLocalProject,
} from "hooks";
import { moderatorArray } from "constant";
import { useTranslation } from "react-i18next";
import { Item } from "./LocalTriggers.styled";

export default function LocalTriggers() {
  const { t } = useTranslation();
  const [pid, setPid] = useState("");
  const role = useRole();
  const { data: projects } = usePrivateProjects();
  const handleChange = (e: SelectChangeEvent) => {
    setPid(e.target?.value);
  };
  const handleCreateLocalPrices = useHandleCreateLocalPrices(pid);
  const handleCreateLocalProject = useHandleCreateLocalProject();

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
              onClick={handleCreateLocalProject}
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
              <FormControl
                sx={{
                  minWidth: 160,
                  mr: 2,
                }}
              >
                <InputLabel htmlFor="project-select">
                  {t("pages.admin.local.project")}
                </InputLabel>
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
              </FormControl>
            )}
            <Button
              size="large"
              variant="contained"
              disabled={!moderatorArray.has(role) || !pid}
              onClick={handleCreateLocalPrices}
            >
              {t("pages.admin.local.createPrices")}
            </Button>
          </Item>
        </Grid>
      </Box>
    </Paper>
  );
}
