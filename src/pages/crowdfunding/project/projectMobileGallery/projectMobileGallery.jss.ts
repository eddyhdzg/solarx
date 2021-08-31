import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectMobileGallery_root: {
      flexGrow: 1,
      position: "relative",
    },
    projectMobileGallery_swipeableViews: {
      minHeight: 360,
    },
    projectMobileGallery_img: {
      height: 360,
      display: "block",
      objectFit: "cover",
      overflow: "hidden",
      width: "100%",
    },
    projectMobileGallery_dots: {
      justifyContent: "center",
    },
    projectMobileGallery_nextButton: {
      position: "absolute",
      right: theme.spacing(1),
      bottom: 0,
      top: 0,
      height: "fit-content",
      margin: "auto",
      backgroundColor: "rgba(255,255,255,0.2)",
      maxHeight: 30,
      maxWidth: 30,
    },
    projectMobileGallery_backButton: {
      position: "absolute",
      left: theme.spacing(1),
      bottom: 0,
      top: 0,
      height: "fit-content",
      margin: "auto",
      backgroundColor: "rgba(255,255,255,0.2)",
      maxHeight: 30,
      maxWidth: 30,
    },
  })
);

export default useStyles;
