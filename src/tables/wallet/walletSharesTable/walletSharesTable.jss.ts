import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    walletSharesTable_table: {
      whiteSpace: "nowrap",
      "& th, & td": {
        borderBottomColor: "#242424",
      },
      "& tbody tr:last-child th, tbody tr:last-child td": {
        borderBottom: "none",
      },
    },
    walletSharesTable_header: {
      textTransform: "capitalize",
    },
    walletSharesTable_projectName: {
      display: "flex",
      alignItems: "center",
    },
    walletSharesTable_avatar: {
      marginRight: theme.spacing(1.5),
    },
  })
);

export default useStyles;
