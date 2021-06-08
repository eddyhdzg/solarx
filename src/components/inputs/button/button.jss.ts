import { ButtonProps as MUIButtonProps } from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";

const fontSize: { [key: string]: string } = {
  large: "1.125rem",
};

const paddingHorizontal: { [key: string]: number } = {
  large: 32,
};

const useStyles = makeStyles<Theme, { size: MUIButtonProps["size"] }>({
  button: {
    textTransform: "capitalize",
    fontSize: (props) => (props.size ? fontSize[props.size] : undefined),
    paddingLeft: (props) =>
      props.size ? paddingHorizontal[props.size] : undefined,
    paddingRight: (props) =>
      props.size ? paddingHorizontal[props.size] : undefined,
  },
});

export default useStyles;
