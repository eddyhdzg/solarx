import { Paper, Typography } from "@mui/material";

interface IMessagePaperProps {
  message?: string;
}

export default function MessagePaper({ message }: IMessagePaperProps) {
  return (
    <Paper
      sx={(theme) => ({
        maxWidth: theme.spacing(100),
        py: {
          xs: 4,
          md: 8,
        },
        px: {
          xs: 2,
          md: 4,
        },
      })}
    >
      <Typography variant="h6">{message}</Typography>
    </Paper>
  );
}
