import { useState } from "react";
import { Button } from "@material-ui/core";
import { Project } from "types";
import CollectionsOutlinedIcon from "@material-ui/icons/CollectionsOutlined";
import ProjectScrollGallery from "../projectScrollGallery/ProjectScrollGallery";
import useStyles from "./projectDesktopGallery.jss";

export default function ProjectDesktopGallery({
  images,
}: Pick<Project, "images">) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.projectDesktopGallery_root}>
        <div
          className={[
            classes.projectDesktopGallery_item,
            classes.projectDesktopGallery_item__1,
          ].join(" ")}
        >
          {images && images.length > 0 && (
            <img
              src={images[0]}
              className={classes.projectDesktopGallery_img}
              alt="project-2"
            />
          )}
        </div>
        <div
          className={[
            classes.projectDesktopGallery_item,
            classes.projectDesktopGallery_item__2,
          ].join(" ")}
        >
          {images && images.length > 1 && (
            <img
              src={images[1]}
              className={classes.projectDesktopGallery_img}
              alt="project-2"
            />
          )}
        </div>
        <div
          className={[
            classes.projectDesktopGallery_item,
            classes.projectDesktopGallery_item__3,
          ].join(" ")}
        >
          {images && images.length > 2 && (
            <img
              src={images[2]}
              className={classes.projectDesktopGallery_img}
              alt="project-2"
            />
          )}
        </div>
        {Boolean(images?.length) && (
          <Button
            variant="contained"
            className={classes.projectDesktopGallery_button}
            startIcon={<CollectionsOutlinedIcon />}
            onClick={handleClickOpen()}
          >
            Show all photos
          </Button>
        )}
      </div>
      <ProjectScrollGallery
        images={images}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
}
