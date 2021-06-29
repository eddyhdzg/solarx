import NumberFormat from "react-number-format";

interface NumberFormatInputProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  allowNegative?: boolean;
}

export default function NumberFormatInput({
  name,
  inputRef,
  onChange,
  allowNegative = false,
  ...other
}: NumberFormatInputProps) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      }}
      allowNegative={allowNegative}
    />
  );
}
