import { forwardRef } from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";

interface INumberFormatInputProps extends NumberFormatProps {
  onChange: (...event: any[]) => void;
  name: string;
}

const NumberFormatInput = forwardRef<NumberFormat, INumberFormatInputProps>(
  function NumberFormatCustom(
    {
      onChange,
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
      ...rest
    },
    ref
  ) {
    const handleChange = (value: number) => {
      let newValue = value;
      if (value <= min) newValue = Number(min);
      else if (value >= max) newValue = Number(max);
      else newValue = value;
      onChange({
        target: {
          value: String(newValue),
        },
      });
    };

    return (
      <NumberFormat
        {...rest}
        getInputRef={ref}
        isNumericString
        onValueChange={(values) => {
          handleChange(values.floatValue || 0);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") handleChange(Number(rest.value) + 1);
          if (e.key === "ArrowDown") handleChange(Number(rest.value) - 1);
        }}
      />
    );
  }
);

export default NumberFormatInput;
