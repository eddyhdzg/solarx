import { Typography, Link } from "@mui/material";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { SectionButtonPaper } from "./SectionButton.styled";

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
    <Link component={RouterLink} to={to}>
      <SectionButtonPaper>
        <Typography variant="h6">{emoji}</Typography>
        <Typography noWrap variant="subtitle1">
          {title}
        </Typography>
      </SectionButtonPaper>
    </Link>
  );
}
