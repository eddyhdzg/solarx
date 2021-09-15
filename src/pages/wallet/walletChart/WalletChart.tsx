import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import useStyles from "./walletChart.jss";

export default function WalletChart() {
  const classes = useStyles();
  const [age, setAge] = useState(10);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setAge(event.target.value as number);
  };

  return (
    <Paper className={classes.walletChart_root} elevation={3}>
      <div className={classes.walletChart_header}>
        <div className={classes.walletChart_titleWrapper}>
          <Typography variant="subtitle1" className={classes.walletChart_title}>
            $10,684.16 MXN
          </Typography>

          <ArrowDropUpIcon className={classes.walletChart_titleActivity} />
          <Typography
            variant="subtitle2"
            className={classes.walletChart_titleActivity}
          >
            $134.41 MXN (1.34%)
          </Typography>
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
            <option value={30}>1 año</option>
          </Select>
        </FormControl>
      </div>
      <div>Chart</div>
    </Paper>
  );
}
