import { TypographyProps } from "@mui/material";
import { PageTitleTypography } from "./PageTitle.styled";

interface PageTitleProps extends Pick<TypographyProps, "variant"> {
  component?: React.ElementType;
}

const PageTitle: React.FC<PageTitleProps> = ({
  component = "h1",
  variant = "h3",
  children,
}) => {
  return (
    <PageTitleTypography component={component} variant={variant}>
      {children}
    </PageTitleTypography>
  );
};

export default PageTitle;
