import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./projectCardTabulator.jss";
import { formatMoney, formatNumber } from "utils";

const sharePrice = 8000;
const monthlyRevenue = 118.66;
const sharesAvailable = 9719;
const max = 5;

export default function ProjectCardTabulator() {
  const classes = useStyles();
  const [shares, setShares] = useState(1);
  const [recurrence, setRecurrence] = useState<1 | 12>(12);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setShares(Number(e.target.value));
  };

  const handleRecurrenceChange = (value: 1 | 12) => {
    setRecurrence(value);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h5">Summary</Typography>

          <Typography variant="body2" color="textSecondary">
            {formatNumber(sharesAvailable)} Shares available
          </Typography>
        </div>

        <div className={classes.projectCardSummary_inputs}>
          <TextField
            id="outlined-number"
            label="Number of Shares"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={shares}
            onChange={(e) => handleChange(e)}
            InputProps={{ inputProps: { min: 1, max } }}
            className={classes.projectCardSummary_input}
          />
          <ButtonGroup aria-label="monthly or yearly button group">
            <Button
              color={recurrence === 1 ? "primary" : "default"}
              onClick={() => handleRecurrenceChange(1)}
            >
              Monthly
            </Button>
            <Button
              color={recurrence === 12 ? "primary" : "default"}
              onClick={() => handleRecurrenceChange(12)}
            >
              Yearly
            </Button>
          </ButtonGroup>
        </div>

        <Divider className={classes.projectCardSummary_divider} />

        <ul className={classes.projectCardSummary_ul}>
          <li className={classes.projectCardSummary_li}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
              className={classes.projectCardSummary_mr1}
            >
              {recurrence === 1 ? "Monthly" : "Yearly"} revenue
            </Typography>
            <Typography variant="subtitle1">
              {formatMoney(monthlyRevenue * shares * recurrence)}
            </Typography>
          </li>
          <li className={classes.projectCardSummary_li}>
            <Typography variant="subtitle2" color="textSecondary">
              Total Price
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.projectCardSummary_mr1}
            >
              {formatMoney(sharePrice * shares)}
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardActions className={classes.projectCardSummary_cardActions}>
        <Button color="primary" variant="contained" size="large">
          Proceed to Payment
        </Button>
      </CardActions>
    </Card>
  );
}
