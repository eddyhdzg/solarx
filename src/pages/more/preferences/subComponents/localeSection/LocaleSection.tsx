import { Divider, Typography, Grid } from "@material-ui/core";
import { LocaleSelect, SectionBlock, GridItem } from "components";
import useStyles from "./localeSection.jss";
import { useTranslation } from "react-i18next";

export default function LocaleSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { Row } = SectionBlock;

  return (
    <SectionBlock>
      <Row>
        <Typography variant="subtitle1">
          {t("pages.more.preferences.language")}
        </Typography>
      </Row>
      <Divider />
      <Row>
        <Grid container spacing={3}>
          <GridItem xs={5} sm={4}>
            <Typography variant="body2">
              {t("pages.more.preferences.interfaceLanguage")}
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
