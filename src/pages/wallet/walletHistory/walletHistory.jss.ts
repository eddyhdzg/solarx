import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletHistory_root: {
      backgroundColor: "#1B1B1B",
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(3),
      maxHeight: theme.spacing(80),
      overflowY: "auto",
    },
    walletHistory_title: {
      paddingBottom: theme.spacing(3),
    },
    walletHistory_monthContainer: {
      "&:not(:last-child)": {
        paddingBottom: theme.spacing(4),
      },
    },
    walletHistory_month: {
      paddingBottom: theme.spacing(1.5),
    },

    walletHistory_li: {
      display: "flex",
      justifyContent: "space-between",
      "&:not(:first-child)": {
        paddingTop: theme.spacing(1.5),
      },
      "&:not(:last-child)": {
        paddingBottom: theme.spacing(1.5),
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.palette.divider,
      },
    },
    walletHistory_description: {
      display: "flex",
      alignItems: "center",
    },
    walletHistory_data: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      textAlign: "end",
    },
    walletHistory_chip: {
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 3,
      color: "#00BFA5",
      backgroundColor: "rgba(0, 191, 165, 0.21)",
    },
  })
);

export default useStyles;
