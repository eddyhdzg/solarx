import { Box, Container, Paper, Grid } from "@mui/material";
import {
  GridItem,
  PageTitle,
  ReceiptActions,
  ReceiptIcon,
  ReceiptHeader,
  ReceiptData,
  ReceiptSummary,
} from "components";
import { useBreakpoint } from "hooks";
import { useTranslation } from "react-i18next";

export default function ReceiptTemplate() {
  const { t } = useTranslation();
  const md = useBreakpoint("md");
  return (
    <Container maxWidth="2xl">
      <PageTitle>{t("pages.more.receipt.title")}</PageTitle>
      <Paper
        sx={{
          maxWidth: 800,
          mb: 8,
        }}
      >
        <Box
          sx={{
            py: {
              xs: 4,
              md: 6,
            },
            px: {
              xs: 3,
              md: 6,
            },
          }}
        >
          <Grid container columnSpacing={3} rowSpacing={8}>
            {md && (
              <GridItem md={3}>
                <ReceiptIcon />
              </GridItem>
            )}
            <GridItem md={9}>
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
