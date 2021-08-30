import { Paper, Typography } from "@material-ui/core";
import useStyles from "./messagePaper.jss";

interface IMessagePaperProps {
  message?: string;
}
export default function MessagePaper({ message }: IMessagePaperProps) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.messagePaper_root}>
      <Typography variant="h6">{message}</Typography>
    </Paper>
  );
}
