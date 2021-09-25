import { useState } from "react";
import { Box, MobileStepper, Skeleton } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { Project } from "types";

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
      <Box
        sx={{
          flexGrow: 1,
          position: "relative",
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            height: 360,
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          minHeight: 360,
        }}
      >
        {images?.map((img, index) => (
          <div key={img}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                src={img}
                alt="swipable-view"
                sx={{
                  height: 360,
                  display: "block",
                  objectFit: "cover",
                  overflow: "hidden",
                  width: "100%",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
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
        sx={{
          justifyContent: "center",
        }}
        nextButton={<></>}
        backButton={<></>}
      />
    </Box>
  );
};

export default ProjectMobileGallery;
