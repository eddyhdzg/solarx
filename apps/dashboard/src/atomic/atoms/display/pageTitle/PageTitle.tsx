import { Typography, TypographyProps } from "@mui/material";

interface PageTitleProps extends Pick<TypographyProps, "variant"> {
  component?: React.ElementType;
}

const PageTitle: React.FC<PageTitleProps> = ({
  component = "h1",
  variant = "h3",
  children,
}) => {
  return (
    <Typography
      component={component}
      variant={variant}
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        my: 3,
        mt: {
          sm: 5,
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
