import { Typography } from "@mui/material";
import { MessagePaperRoot } from "./MessagePaper.styled";

interface IMessagePaperProps {
  message?: string;
}
export default function MessagePaper({ message }: IMessagePaperProps) {
  return (
    <MessagePaperRoot>
      <Typography variant="h6">{message}</Typography>
    </MessagePaperRoot>
  );
}
