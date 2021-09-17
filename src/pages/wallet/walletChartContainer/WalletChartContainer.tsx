import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import useStyles from "./walletChartContainer.jss";
import WalletChart from "../walletChart/WalletChart";

export default function WalletChartContainer() {
  const classes = useStyles();
  const [age, setAge] = useState(10);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setAge(event.target.value as number);
  };

  return (
    <Paper className={classes.walletChartContainer_root} elevation={3}>
      <div className={classes.walletChartContainer_header}>
        <div className={classes.walletChartContainer_titleWrapper}>
          <Typography
            variant="subtitle1"
            className={classes.walletChartContainer_title}
          >
            $10,684.16 MXN
          </Typography>
          <div className={classes.walletChartContainer_titleActivityWrapper}>
            <ArrowDropUpIcon
              className={classes.walletChartContainer_titleActivity}
            />
            <Typography
              variant="subtitle2"
              className={classes.walletChartContainer_titleActivity}
            >
              $134.41 MXN (1.34%)
            </Typography>
          </div>
        </div>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Timespan</InputLabel>
          <Select
            native
            value={age}
            onChange={handleChange}
            label="Timespan"
            inputProps={{
              name: "timespan",
              id: "outlined-timespan-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Histórico</option>
            <option value={20}>1 mes</option>
            <option value={30}>3 meses</option>
            <option value={40}>1 año</option>
          </Select>
        </FormControl>
      </div>
      <div>
        <WalletChart />
      </div>
    </Paper>
  );
}
