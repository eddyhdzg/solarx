import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectDesktopGallery_root: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      minHeight: theme.spacing(50),
      gridGap: theme.spacing(2),
    },
    projectDesktopGallery_img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      borderRadius: theme.spacing(0.5),
    },
    projectDesktopGallery_item: {
      height: "100%",
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(0.5),
    },
    projectDesktopGallery_item__1: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 3,
    },
    projectDesktopGallery_item__2: {
      gridColumnStart: 3,
      gridColumnEnd: 4,
      gridRowStart: 1,
      gridRowEnd: 2,
    },
    projectDesktopGallery_item__3: {
      gridColumnStart: 3,
      gridColumnEnd: 4,
      gridRowStart: 2,
      gridRowEnd: 3,
    },
    projectDesktopGallery_button: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      color: "inherit",
      backgroundColor: theme.palette.background.paper,
      "&:hover": {
        backgroundColor: theme.palette.background.default,
      },
    },
  })
);

export default useStyles;
