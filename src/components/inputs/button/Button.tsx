import React from "react";
import MUIButton, { ButtonProps } from "@material-ui/core/Button";
import useStyles from "./button.jss";

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  size,
  ...props
}) => {
  const styles = useStyles({ size });

  return (
    <MUIButton {...props} className={styles.button} color={color}>
      {children}
    </MUIButton>
  );
};

export default Button;
