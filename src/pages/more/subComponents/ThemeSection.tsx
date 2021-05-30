import { Divider, Typography } from "@material-ui/core";
import { ThemeSelect, SectionBlock, Grid } from "components";
import useStyles from "./themeSection.jss";
import useCopywriting from "hooks/useCopywriting";

export default function ThemeSection() {
  const classes = useStyles();
  const copy = useCopywriting();
  const { Row } = SectionBlock;

  return (
    <SectionBlock>
      <Row>
        <Typography variant="subtitle1">
          {copy.pages.preferences["theme"]}
        </Typography>
      </Row>
      <Divider />
      <Row>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="body2">
              {copy.pages.preferences["interface theme"]}
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes.themeSection_grid}>
            <div className={classes.themeSection_selectContainer}>
              <ThemeSelect />
            </div>
            <Typography variant="caption" color="textSecondary">
              {copy.pages.preferences["choose a theme"]}
            </Typography>
          </Grid>
        </Grid>
      </Row>
    </SectionBlock>
  );
}
