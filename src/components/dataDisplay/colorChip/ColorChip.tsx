import { Chip, ChipProps } from "@material-ui/core";
import useStyles from "./colorChip.jss";

type ChipColor = "yellow" | "blue" | "green";

interface IChip {
  color?: ChipColor;
  label?: string;
  icon?: ChipProps["icon"];
}

export default function ColorChip({ color = "yellow", ...rest }: IChip) {
  const classes = useStyles();

  const chipColor: { [key in ChipColor]: string } = {
    yellow: classes.root__yellow,
    blue: classes.root__blue,
    green: classes.root__green,
  };

  return (
    <Chip
      classes={{
        icon: classes.icon,
        root: classes.root,
      }}
      className={chipColor[color]}
      {...rest}
    />
  );
}
