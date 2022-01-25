import { useState } from "react";
import { Project } from "solarx-types";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ProjectScrollGallery from "../projectScrollGallery/ProjectScrollGallery";
import { useTranslation } from "react-i18next";
import {
  GalleryGrid,
  Item2,
  Item3,
  Img,
  ShowAllButton,
} from "./ProjectDesktopGallery.styled";
import { Item1 } from "./ProjectDesktopGallery.styled";

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
      <GalleryGrid>
        <Item1>
          {images && images.length > 0 && (
            <Img src={images[0]} alt="project-1" />
          )}
        </Item1>
        <Item2>
          {images && images.length > 1 && (
            <Img src={images[1]} alt="project-2" />
          )}
        </Item2>
        <Item3>
          {images && images.length > 2 && (
            <Img src={images[2]} alt="project-3" />
          )}
        </Item3>
        {Boolean(images?.length) && (
          <ShowAllButton
            variant="contained"
            color="inherit"
            startIcon={<CollectionsOutlinedIcon />}
            onClick={handleClickOpen()}
          >
            {t("pages.crowdfunding.project.showAllPhotos")}
          </ShowAllButton>
        )}
      </GalleryGrid>
      <ProjectScrollGallery
        images={images}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
