import { Divider, Typography, Grid } from "@material-ui/core";
import { LocaleSelect, SectionBlock, GridItem } from "components";
import useStyles from "./localeSection.jss";
import useCopywriting from "hooks/useCopywriting";

export default function LocaleSection() {
  const classes = useStyles();
  const copy = useCopywriting();
  const { Row } = SectionBlock;

  return (
    <SectionBlock>
      <Row>
        <Typography variant="subtitle1">
          {copy?.pages?.preferences["locale"]}
        </Typography>
      </Row>
      <Divider />
      <Row>
        <Grid container spacing={3}>
          <GridItem xs={5} sm={4}>
            <Typography variant="body2">
              {copy?.pages?.preferences["interface locale"]}
            </Typography>
          </GridItem>
          <GridItem
            xs={7}
            sm={8}
            className={classes.localeSection_selectContainer}
          >
            <LocaleSelect fullWidth />
          </GridItem>
        </Grid>
      </Row>
    </SectionBlock>
  );
}
