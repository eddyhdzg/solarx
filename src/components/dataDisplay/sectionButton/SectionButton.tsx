import { Paper, Typography, Link } from "@mui/material";
import { Link as RouterLink, LinkProps } from "react-router-dom";

interface ISectionButtonProps {
  title: string;
  to: LinkProps["to"];
  emoji: string;
}

export default function SectionButton({
  title,
  to,
  emoji,
}: ISectionButtonProps) {
  return (
    <Link
      component={RouterLink}
      to={to}
      sx={{
        textDecoration: "inherit",
      }}
    >
      <Paper
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h6">{emoji}</Typography>
        <Typography noWrap variant="subtitle1">
          {title}
        </Typography>
      </Paper>
    </Link>
  );
}
