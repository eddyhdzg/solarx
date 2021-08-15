import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imagesPreview_ul: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      marginTop: 0,
      marginBottom: 0,
      listStyleType: "none",
      paddingLeft: 0,
      height: "100%",
    },
    imagesPreview_li: {
      display: "inline-flex",
      borderRadius: theme.spacing(0.5),
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.palette.divider,
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
      boxSizing: "border-box",
      marginRight: "auto",
      alignItems: "flex-end",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    imagesPreview_img: {
      height: "60px",
      width: "120px",
      objectFit: "cover",
      marginRight: theme.spacing(1),
    },
  })
);

export default useStyles;
