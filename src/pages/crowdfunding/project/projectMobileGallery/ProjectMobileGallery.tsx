import { useState } from "react";
import { MobileStepper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import SwipeableViews from "react-swipeable-views";
import { Project } from "types";
import useStyles from "./projectMobileGallery.jss";

type IProjectMobileGallery = Pick<Project, "images">;

const ProjectMobileGallery: React.FC<IProjectMobileGallery> = ({
  images = [],
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images?.length || 0;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (!maxSteps) {
    return (
      <div className={classes.projectMobileGallery_root}>
        <Skeleton
          animation="wave"
          variant="rect"
          className={classes.projectMobileGallery_img}
        />
      </div>
    );
  }

  return (
    <div className={classes.projectMobileGallery_root}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.projectMobileGallery_swipeableViews}
      >
        {images?.map((img, index) => (
          <div key={img}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.projectMobileGallery_img}
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
          root: classes.projectMobileGallery_dots,
        }}
        nextButton={<></>}
        backButton={<></>}
      />
    </div>
  );
};

export default ProjectMobileGallery;
