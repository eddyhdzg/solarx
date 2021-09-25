import { Paper, Typography } from "@mui/material";

interface IMessagePaperProps {
  message?: string;
}
export default function MessagePaper({ message }: IMessagePaperProps) {
  return (
    <Paper
      sx={{
        maxWidth: 800,
        py: {
          xxs: 4,
          md: 8,
        },
        px: {
          xxs: 2,
          md: 4,
        },
      }}
    >
      <Typography variant="h6">{message}</Typography>
    </Paper>
  );
}
