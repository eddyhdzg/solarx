import { Box, Paper, Typography, Chip } from "@mui/material";
import { Dot } from "components";
import { demoTransactions } from "constant";

export default function WalletHistory() {
  return (
    <Paper
      sx={{
        p: 3,
        overflowY: "auto",
        maxHeight: (theme) => theme.spacing(80),
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        History
      </Typography>
      {demoTransactions.map((month) => {
        return (
          <Box
            sx={{
              "&:not(:last-child)": {
                pb: 4,
              },
            }}
            key={month.month}
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{
                pb: 1.5,
              }}
            >
              {month.month}
            </Typography>
            <ul>
              {month.transactions.map((transaction) => {
                return (
                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      "&:not(:first-child)": {
                        pt: 1.5,
                      },
                      "&:not(:last-child)": {
                        pb: 1.5,
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderBottomColor: (theme) => theme.palette.divider,
                      },
                    }}
                    key={transaction.date}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Dot color={transaction.color} />
                      <div>
                        <Typography variant="subtitle2">
                          {transaction.title}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {transaction.description}
                        </Typography>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        textAlign: "end",
                      }}
                    >
                      <Chip
                        size="small"
                        label={transaction.value}
                        variant={transaction.color}
                        sx={{
                          fontSize: 12,
                          fontWeight: 600,
                          borderRadius: 1,
                        }}
                      />
                      <Typography variant="caption" color="textSecondary">
                        {transaction.date}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </ul>
          </Box>
        );
      })}
    </Paper>
  );
}
