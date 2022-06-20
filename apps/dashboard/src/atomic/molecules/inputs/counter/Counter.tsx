import { NumberFormatInput } from "atomic";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  CounterRoot,
  CounterInput,
  CounterButtonLeft,
  CounterButtonRight,
} from "./Counter.styled";

interface ICounterProps {
  onChangeShares: (num: number) => void;
  shares: number;
  setShares:
    | React.Dispatch<React.SetStateAction<number>>
    | ((num: number) => void);
  error: boolean;
  max: number;
}

export default function Counter({
  onChangeShares,
  shares,
  setShares,
  error,
  max,
}: ICounterProps) {
  const disabled = max === 0;

  const handleChange = (num: number) => {
    if (num <= 1) setShares(1);
    else if (num >= max) setShares(max);
    else setShares(num);
  };

  return (
    <CounterRoot error={error && !disabled}>
      <CounterButtonLeft
        variant="outlined"
        color="inherit"
        disabled={shares <= 1}
        onClick={() => onChangeShares(-1)}
      >
        <RemoveRoundedIcon />
      </CounterButtonLeft>

      <CounterInput
        id="shares-counter"
        value={shares}
        onChange={(value) => {
          if (value) handleChange(Number(value));
        }}
        inputProps={{
          inputMode: "numeric",
          min: 1,
          max,
        }}
        inputComponent={NumberFormatInput as any}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") handleChange(shares + 1);
          if (e.key === "ArrowDown") handleChange(shares - 1);
        }}
        disabled={disabled}
      />

      <CounterButtonRight
        variant="outlined"
        color="inherit"
        disabled={max <= shares}
        onClick={() => onChangeShares(1)}
      >
        <AddRoundedIcon />
      </CounterButtonRight>
    </CounterRoot>
  );
}
