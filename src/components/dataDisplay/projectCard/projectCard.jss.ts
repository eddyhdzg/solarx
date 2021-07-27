import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectCard_root: {
      boxShadow: "none",
      overflow: "visible",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      background: theme.palette.background.default,
      backgroundClip: "padding-box",
      border: "solid 3px transparent",
      borderRadius: "5px",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: "-1",
        margin: "-3px",
        borderRadius: "inherit",
        background: theme.custom.gradient,
      },
    },
    projectCard_media: {
      height: 160,
      display: "block",
      width: "100%",
    },
    projectCard_media__loaded: {
      display: "none",
    },
    projectCard_header: {
      marginBottom: theme.spacing(3),
    },
    projectCard_data: {
      display: "flex",
      alignItems: "center",
      marginBottom: 24,
    },
    projectCard_dataCol: {
      display: "flex",
      alignItems: "center",
      width: "50%",
    },
    projectCard_subtitle: {
      lineHeight: "1.25rem",
    },
    projectCard_icon: {
      marginRight: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    projectCard_noWrap: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    projectCard_button: {
      marginLeft: "auto",
      textTransform: "none",
    },
    projectCard_progress: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: theme.spacing(1),
    },
  })
);

export default useStyles;
