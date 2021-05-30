import {
  Divider,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {
  ThemeSelect,
  SectionBlock,
  GridItem,
  ThemeButtonGroup,
} from "components";
import useStyles from "./themeSection.jss";
import useCopywriting from "hooks/useCopywriting";

export default function ThemeSection() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
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
          <GridItem item xs={5} sm={4}>
            <Typography variant="body2">
              {copy.pages.preferences["interface theme"]}
            </Typography>
          </GridItem>
          <GridItem item xs={7} sm={8} className={classes.themeSection_grid}>
            <div className={classes.themeSection_selectContainer}>
              {sm ? <ThemeButtonGroup /> : <ThemeSelect fullWidth />}
            </div>
            <Typography variant="caption" color="textSecondary">
              {copy.pages.preferences["choose a theme"]}
            </Typography>
          </GridItem>
        </Grid>
      </Row>
    </SectionBlock>
  );
}
