import { Dialog, DialogContent, ImageList } from "@mui/material";
import { Project } from "solarx-types";
import { StyledImageListItem } from "./ProjectScrollGallery.styled";

interface IProjectScrollGalleryProps {
  images: Project["images"];
  open: boolean;
  handleClose: () => void;
}

export default function ProjectScrollGallery({
  images = null,
  open,
  handleClose,
}: IProjectScrollGalleryProps) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <DialogContent>
          <ImageList variant="quilted" rowHeight={240} cols={2} gap={8}>
            {images !== null &&
              images!.map((image, index) => (
                <StyledImageListItem
                  key={image}
                  cols={index % 3 ? 1 : 2}
                  rows={index % 3 ? 1 : 2}
                >
                  <img src={image} alt={`project-${index}`} />
                </StyledImageListItem>
              ))}
          </ImageList>
        </DialogContent>
      </Dialog>
    </div>
  );
}
