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
  onChangePanels: (num: number) => void;
  panels: number;
  setPanels:
    | React.Dispatch<React.SetStateAction<number>>
    | ((num: number) => void);
  error: boolean;
  max: number;
}

export default function Counter({
  onChangePanels,
  panels,
  setPanels,
  error,
  max,
}: ICounterProps) {
  const disabled = max === 0;

  const handleChange = (num: number) => {
    if (num <= 1) setPanels(1);
    else if (num >= max) setPanels(max);
    else setPanels(num);
  };

  return (
    <CounterRoot error={error && !disabled}>
      <CounterButtonLeft
        variant="outlined"
        color="inherit"
        disabled={panels <= 1}
        onClick={() => onChangePanels(-1)}
      >
        <RemoveRoundedIcon />
      </CounterButtonLeft>

      <CounterInput
        id="panels-counter"
        value={panels}
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
          if (e.key === "ArrowUp") handleChange(panels + 1);
          if (e.key === "ArrowDown") handleChange(panels - 1);
        }}
        disabled={disabled}
      />

      <CounterButtonRight
        variant="outlined"
        color="inherit"
        disabled={max <= panels}
        onClick={() => onChangePanels(1)}
      >
        <AddRoundedIcon />
      </CounterButtonRight>
    </CounterRoot>
  );
}
