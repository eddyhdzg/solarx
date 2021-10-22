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
    const handleChange = (value?: number) => {
      let newValue = value as number;
      if (newValue <= min) newValue = Number(min);
      else if (newValue >= max) newValue = Number(max);
      onChange(newValue);
    };

    return (
      <NumberFormat
        {...rest}
        getInputRef={ref}
        isNumericString
        onValueChange={(values) => {
          handleChange(values.floatValue);
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
