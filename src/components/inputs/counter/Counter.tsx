import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { CounterRoot, CounterButton, CounterInput } from "./Counter.styled";
import { NumberFormatInput } from "components";

interface ICounterProps {
  onChangeShares: (num: number) => void;
  shares: number;
  setShares: React.Dispatch<React.SetStateAction<number>>;
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
  const handleChange = (num: number) => {
    if (num <= 1) {
      setShares(1);
    } else if (num >= max) {
      setShares(max);
    } else {
      setShares(num);
    }
  };

  return (
    <CounterRoot error={error}>
      <CounterButton
        variant="outlined"
        color="inherit"
        disabled={shares <= 1}
        onClick={() => onChangeShares(-1)}
      >
        <RemoveRoundedIcon />
      </CounterButton>

      <CounterInput
        id="shares-counter"
        value={shares}
        onChange={(e) => {
          handleChange(Number(e.target.value));
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
      />

      <CounterButton
        variant="outlined"
        color="inherit"
        disabled={max <= shares}
        onClick={() => onChangeShares(1)}
      >
        <AddRoundedIcon />
      </CounterButton>
    </CounterRoot>
  );
}
