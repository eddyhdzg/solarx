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
    <MUIButton className={styles.button} color={color} size={size} {...props}>
      {children}
    </MUIButton>
  );
};

export default Button;
