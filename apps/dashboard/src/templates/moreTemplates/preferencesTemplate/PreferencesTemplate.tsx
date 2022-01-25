import { GridItem } from "components";
import { Grid } from "@mui/material";
import { LocaleSection } from "organisms";
import { StyledRoot } from "./PreferencesTemplate.styled";

export default function PreferencesTemplate() {
  return (
    <StyledRoot>
      <Grid container direction="row" spacing={4}>
        <GridItem xs={12}>
          <LocaleSection />
        </GridItem>
      </Grid>
    </StyledRoot>
  );
}
