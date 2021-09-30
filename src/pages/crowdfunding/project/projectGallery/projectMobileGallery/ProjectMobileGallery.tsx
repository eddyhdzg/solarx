import { useState } from "react";
import { Project } from "types";
import SwipeableViews from "react-swipeable-views";
import {
  SkeletonWrapper,
  StyledSkeleton,
  Img,
  StyledMobileStepper,
} from "./ProjectMobileGallery.styled";

type IProjectMobileGallery = Pick<Project, "images">;

const ProjectMobileGallery: React.FC<IProjectMobileGallery> = ({
  images = [],
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images?.length || 0;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (!maxSteps) {
    return (
      <SkeletonWrapper>
        <StyledSkeleton animation="wave" variant="rectangular" />
      </SkeletonWrapper>
    );
  }

  return (
    <SkeletonWrapper>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images?.map((img, index) => (
          <div key={img}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Img src={img} alt="swipable-view" />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <StyledMobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={<></>}
        backButton={<></>}
      />
    </SkeletonWrapper>
  );
};

export default ProjectMobileGallery;
