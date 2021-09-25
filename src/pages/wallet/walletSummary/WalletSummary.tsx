import { Box, Grid, Paper, Typography } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { formatMoney } from "utils";
import { GridItem } from "components";

export default function WalletSummary() {
  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={3}>
        <GridItem
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundImage: (theme) => theme.custom.elevation[1],
              borderRadius: 1,
              mr: 1.5,
              p: 1,
            }}
          >
            <MonetizationOnOutlinedIcon
              sx={{
                color: (theme) => theme.custom.totalBalance,
              }}
            />
          </Box>
          <div>
            <Typography variant="h6">{formatMoney(10684.16)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Total Balance
            </Typography>
          </div>
        </GridItem>

        <GridItem
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundImage: (theme) => theme.custom.elevation[1],
              borderRadius: 1,
              mr: 1.5,
              p: 1,
            }}
          >
            <MonetizationOnOutlinedIcon
              sx={{
                color: (theme) => theme.custom.stocks,
              }}
            />
          </Box>
          <div>
            <Typography variant="h6">{formatMoney(10200)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Stocks
            </Typography>
          </div>
        </GridItem>
        <GridItem
          md={6}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundImage: (theme) => theme.custom.elevation[1],
              borderRadius: 1,
              mr: 1.5,
              p: 1,
            }}
          >
            <MonetizationOnOutlinedIcon
              sx={{
                color: (theme) => theme.custom.cash,
              }}
            />
          </Box>
          <div>
            <Typography variant="h6">{formatMoney(684.16)}</Typography>
            <Typography variant="body2" color="textSecondary">
              Cash
            </Typography>
          </div>
        </GridItem>
      </Grid>
    </Paper>
  );
}
