import { Divider, Typography, Grid } from "@mui/material";
import { LocaleSelect, SectionBlock, GridItem } from "components";
import { useTranslation } from "react-i18next";

export default function LocaleSection() {
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
          <GridItem xs={7} sm={8}>
            <LocaleSelect fullWidth />
          </GridItem>
        </Grid>
      </Row>
    </SectionBlock>
  );
}
