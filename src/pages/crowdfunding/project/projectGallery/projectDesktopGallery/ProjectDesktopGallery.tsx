import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Project } from "types";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ProjectScrollGallery from "../projectScrollGallery/ProjectScrollGallery";
import { useTranslation } from "react-i18next";

export default function ProjectDesktopGallery({
  images,
}: Pick<Project, "images">) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          minHeight: (theme) => theme.spacing(40),
          maxHeight: (theme) => theme.spacing(60),
          gridGap: (theme) => theme.spacing(2),
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.paper,
            backgroundImage: (theme) => theme.custom.elevation[1],
            borderRadius: 1,
            // Item 1
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3,
          }}
        >
          {images && images.length > 0 && (
            <Box
              component="img"
              src={images[0]}
              sx={{
                overflow: "hidden",
                height: "100%",
                width: "100%",
              }}
              alt="project-1"
            />
          )}
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.paper,
            backgroundImage: (theme) => theme.custom.elevation[1],
            borderRadius: 1,
            // Item 2
            gridColumnStart: 3,
            gridColumnEnd: 4,
            gridRowStart: 1,
            gridRowEnd: 2,
          }}
        >
          {images && images.length > 1 && (
            <Box
              component="img"
              src={images[1]}
              sx={{
                overflow: "hidden",
                height: "100%",
                width: "100%",
              }}
              alt="project-2"
            />
          )}
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            height: "100%",
            width: "100%",
            backgroundColor: (theme) => theme.palette.background.paper,
            backgroundImage: (theme) => theme.custom.elevation[1],
            borderRadius: 1,
            // Item 3
            gridColumnStart: 3,
            gridColumnEnd: 4,
            gridRowStart: 2,
            gridRowEnd: 3,
          }}
        >
          {images && images.length > 2 && (
            <Box
              component="img"
              src={images[2]}
              sx={{
                overflow: "hidden",
                height: "100%",
                width: "100%",
              }}
              alt="project-3"
            />
          )}
        </Box>
        {Boolean(images?.length) && (
          <Button
            variant="contained"
            color="inherit"
            startIcon={<CollectionsOutlinedIcon />}
            onClick={handleClickOpen()}
            sx={{
              position: "absolute",
              bottom: (theme) => theme.spacing(2),
              right: (theme) => theme.spacing(2),
              backgroundColor: (theme) => theme.palette.background.paper,
              backgroundImage: (theme) => theme.custom.elevation[1],
              "&:hover": {
                backgroundColor: (theme) => theme.palette.background.paper,
                backgroundImage: (theme) => theme.custom.elevation[3],
              },
            }}
          >
            {t("pages.crowdfunding.project.showAllPhotos")}
          </Button>
        )}
      </Box>
      <ProjectScrollGallery
        images={images}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
