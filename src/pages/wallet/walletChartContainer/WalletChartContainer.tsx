import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import WalletChart from "../walletChart/WalletChart";

export default function WalletChartContainer() {
  const [age, setAge] = useState(10);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(Number(event.target.value));
  };

  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              mr: 0.5,
            }}
          >
            $10,684.16 MXN
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: -1,
            }}
          >
            <ArrowDropUpIcon
              sx={{
                color: (theme) => theme.custom.cash,
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                color: (theme) => theme.custom.cash,
              }}
            >
              $134.41 MXN (1.34%)
            </Typography>
          </Box>
        </Box>

        <FormControl
          variant="outlined"
          sx={{
            mb: 2,
            minWidth: (theme) => theme.spacing(15),
          }}
        >
          <InputLabel htmlFor="outlined-age-native-simple">Timespan</InputLabel>
          <Select
            native
            value={String(age)}
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
      </Box>
      <div>
        <WalletChart />
      </div>
    </Paper>
  );
}
