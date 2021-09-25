import { Dialog, DialogContent, ImageList, ImageListItem } from "@mui/material";
import { Project } from "types";

interface IProjectScrollGalleryProps {
  images: Project["images"];
  open: boolean;
  handleClose: () => void;
}

export default function ProjectScrollGallery({
  images,
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
            {images!.map((image, index) => (
              <ImageListItem
                key={image}
                cols={index % 3 ? 1 : 2}
                rows={index % 3 ? 1 : 2}
                sx={{
                  "& .MuiImageListItem-img": {
                    borderRadius: 1,
                  },
                }}
              >
                <img src={image} alt={`project-${index}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>
    </div>
  );
}
