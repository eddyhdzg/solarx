import { useState } from "react";
import { IconButton, MobileStepper } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { tileData } from "../../projects.utils";
import useStyles from "./projectGallery.jss";

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tileData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.projectGallery_root}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tileData.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.projectGallery_img}
                src={step.img}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        classes={{
          root: classes.projectGallery_dots,
        }}
        nextButton={
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={classes.projectGallery_nextButton}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className={classes.projectGallery_backButton}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
