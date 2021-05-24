import { Divider, Typography } from "@material-ui/core";
import { ThemeSelect, SectionBlock, Grid } from "components";
import useStyles from "./themeSection.jss";

export default function ThemeSection() {
  const classes = useStyles();
  const { Row } = SectionBlock;

  return (
    <SectionBlock>
      <Row>
        <Typography variant="subtitle1">Theme</Typography>
      </Row>
      <Divider />
      <Row>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="body2">Interface theme</Typography>
          </Grid>
          <Grid item xs={8} className={classes.themeSection_selectContainer}>
            <ThemeSelect fullWidth />
          </Grid>
        </Grid>
      </Row>
    </SectionBlock>
  );
}
