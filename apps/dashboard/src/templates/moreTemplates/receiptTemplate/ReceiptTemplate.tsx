import { Box, Container, Paper, Grid } from "@mui/material";
import { PageTitle, GridItem } from "components";
import { useBreakpoint } from "hooks";
import {
  ReceiptActions,
  ReceiptIcon,
  ReceiptHeader,
  ReceiptData,
  ReceiptSummary,
} from "elements";
import { useTranslation } from "react-i18next";

export default function ReceiptTemplate() {
  const { t } = useTranslation();
  const md = useBreakpoint("md");
  return (
    <Container maxWidth="xl">
      <PageTitle>{t("pages.more.receipt.receipt")}</PageTitle>
      <Paper
        sx={{
          maxWidth: 800,
          mb: 8,
        }}
      >
        <Box
          sx={{
            py: {
              xxs: 4,
              sm: 6,
            },
            px: {
              xxs: 3,
              sm: 6,
            },
          }}
        >
          <Grid container columnSpacing={3} rowSpacing={8}>
            {md && (
              <GridItem xxs={12} xs={12} md={3}>
                <ReceiptIcon />
              </GridItem>
            )}
            <GridItem xxs={12} xs={12} md={9}>
              <div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {!md && <ReceiptIcon />}
                  <ReceiptHeader />
                </Box>
                <ReceiptData />
                <ReceiptSummary />
              </div>
            </GridItem>
          </Grid>
        </Box>
        <ReceiptActions />
      </Paper>
    </Container>
  );
}
