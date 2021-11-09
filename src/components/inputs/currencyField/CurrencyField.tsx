import { forwardRef } from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";

interface ICurrencyFieldProps
  extends Omit<NumberFormatProps, "value" | "min" | "max"> {
  onChange: (...event: any[]) => void;
  name: string;
  value: number;
  min?: number;
  max?: number;
}

const CurrencyField = forwardRef<NumberFormat, ICurrencyFieldProps>(
  function NumberFormatCustom(
    {
      onChange,
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
      value,
      ...rest
    },
    ref
  ) {
    const currValue = value;

    const handleChange = (value: number = min) => {
      if (value <= min) value = min;
      else if (value >= max) value = max;
      onChange(value);
    };

    const keyDown = (e: any) => {
      if (e.key === "ArrowUp") handleChange(Number(currValue) + 100);
      if (e.key === "ArrowDown") handleChange(Number(currValue) - 100);
    };

    return (
      <NumberFormat
        {...rest}
        getInputRef={ref}
        decimalScale={2}
        allowNegative={false}
        value={Number(value) / 100}
        onValueChange={(e) => {
          if (e.value === "") handleChange();
          else handleChange(parseFloat(e.value) * 100);
        }}
        onKeyDown={keyDown}
      />
    );
  }
);

export default CurrencyField;
