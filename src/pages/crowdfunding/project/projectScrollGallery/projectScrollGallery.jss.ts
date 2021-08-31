import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    projectScrollGallery_imageListItem: {
      "& > div": {
        borderRadius: theme.spacing(0.5),
      },
    },
  })
);

export default useStyles;
