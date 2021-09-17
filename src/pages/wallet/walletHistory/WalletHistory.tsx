import { Paper, Typography } from "@material-ui/core";
import { Dot, SquareChip } from "components";
import useStyles from "./walletHistory.jss";
import { IDotProps } from "../../../components/dataDisplay/dot/Dot";

const months: {
  month: string;
  transactions: {
    color: IDotProps["color"];
    title: string;
    description: string;
    value: string;
    date: string;
  }[];
}[] = [
  {
    month: "October 2021",
    transactions: [
      {
        color: "green",
        title: "Deposit",
        description: "Cash added to wallet",
        value: "+ 2,000 MXN",
        date: "Oct 10, 2021 - 17:23 CT",
      },
      {
        color: "red",
        title: "Adquisition",
        description: "Bought 1 share from GE Apodaca",
        value: "- 200 MXN",
        date: "Oct 4, 2021 - 11:12",
      },
      {
        color: "green",
        title: "Monthly revenue",
        description: "Investment cap payment of Sep.",
        value: "+ 148.11 MXN",
        date: "Oct 1, 2021 - 8:30",
      },
    ],
  },
  {
    month: "September 2021",
    transactions: [
      {
        color: "red",
        title: "Withdraw",
        description: "Withdraw to Eddy HeyBanco",
        value: "-5,000 MXN",
        date: "Sep 17, 2021 - 20.11",
      },
      {
        color: "red",
        title: "Adquisition",
        description: "Bought 4 share from AMHSA",
        value: "- 8,000 MXN",
        date: "Sep 16, 2021 - 9:15",
      },
    ],
  },
];

export default function WalletHistory() {
  const classes = useStyles();

  return (
    <Paper className={classes.walletHistory_root} elevation={3}>
      <Typography variant="subtitle1" className={classes.walletHistory_title}>
        History
      </Typography>
      {months.map((month) => {
        return (
          <div
            className={classes.walletHistory_monthContainer}
            key={month.month}
          >
            <Typography
              variant="subtitle2"
              className={classes.walletHistory_month}
              color="textSecondary"
            >
              {month.month}
            </Typography>
            <ul>
              {month.transactions.map((transaction) => {
                return (
                  <li
                    className={classes.walletHistory_li}
                    key={transaction.date}
                  >
                    <div className={classes.walletHistory_description}>
                      <Dot color={transaction.color} />
                      <div>
                        <Typography variant="subtitle2">
                          {transaction.title}
                        </Typography>
                        <Typography variant="caption">
                          <Typography variant="caption" color="textSecondary">
                            {transaction.description}
                          </Typography>
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.walletHistory_data}>
                      <SquareChip
                        size="small"
                        label={transaction.value}
                        color={transaction.color}
                      />
                      <Typography variant="caption">
                        <Typography variant="caption" color="textSecondary">
                          {transaction.date}
                        </Typography>
                      </Typography>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Paper>
  );
}
