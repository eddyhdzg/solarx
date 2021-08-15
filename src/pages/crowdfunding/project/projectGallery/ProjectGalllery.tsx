import { useState } from "react";
import { IconButton, MobileStepper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { Project } from "types";
import useStyles from "./projectGallery.jss";

type IProjectGallery = Pick<Project, "images">;

const ProjectGalllery: React.FC<IProjectGallery> = ({ images = [] }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images?.length || 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (!maxSteps) {
    return (
      <div className={classes.projectGallery_root}>
        <Skeleton
          animation="wave"
          variant="rect"
          className={classes.projectGallery_img}
        />
      </div>
    );
  }

  return (
    <div className={classes.projectGallery_root}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.projectGallery_swipeableViews}
      >
        {images?.map((img, index) => (
          <div key={img}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.projectGallery_img}
                src={img}
                alt="swipable-view"
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
          maxSteps && (
            <IconButton
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className={classes.projectGallery_nextButton}
            >
              <KeyboardArrowRight />
            </IconButton>
          )
        }
        backButton={
          maxSteps && (
            <IconButton
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className={classes.projectGallery_backButton}
            >
              <KeyboardArrowLeft />
            </IconButton>
          )
        }
      />
    </div>
  );
};

export default ProjectGalllery;
