import { Button, ButtonGroup } from "@material-ui/core";
import shallow from "zustand/shallow";
import { ThemeType } from "types";
import { useCopywriting, useStore } from "hooks";
import useStyles from "./themeButtonGroup.jss";
import { ThemeIcon } from "../../icons/ThemeIcon";
import { themeOptions } from "constant";

const ThemeButtonGroup: React.FC = () => {
  const classes = useStyles();
  const copy = useCopywriting();
  const { dispatch, themeType } = useStore(
    ({ dispatch, themeType }) => ({ dispatch, themeType }),
    shallow
  );

  const handleChange = (value: ThemeType) => {
    dispatch({ type: "THEME_SET_THEME", payload: value });
  };

  return (
    <ButtonGroup variant="outlined" aria-label="theme select button group">
      {themeOptions.map((option) => {
        return (
          <Button
            key={option}
            color={themeType === option ? "primary" : "default"}
            onClick={() => {
              handleChange(option);
            }}
          >
            <ThemeIcon
              themeType={option}
              className={classes.themeSelect_icon}
            />
            {copy?.pages?.preferences[option]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ThemeButtonGroup;
