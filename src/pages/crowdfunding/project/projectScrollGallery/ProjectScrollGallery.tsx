import {
  Dialog,
  DialogContent,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import { Project } from "types";
import useStyles from "./projectScrollGallery.jss";

interface IProjectScrollGalleryProps {
  images: Project["images"];
  open: boolean;
  handleClickOpen: () => () => void;
  handleClose: () => void;
}

export default function ProjectScrollGallery({
  images,
  open,
  handleClickOpen,
  handleClose,
}: IProjectScrollGalleryProps) {
  const classes = useStyles();

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
          <ImageList rowHeight={240} cols={2}>
            {images?.map((image, index) => (
              <ImageListItem
                key={image}
                cols={index % 3 ? 1 : 2}
                rows={index % 3 ? 1 : 2}
                className={classes.projectScrollGallery_imageListItem}
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
