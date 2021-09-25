import { Typography } from "@mui/material";

const PageTitle: React.FC = ({ children }) => {
  return (
    <Typography
      component="h1"
      variant="h3"
      sx={{
        mt: {
          xxs: 1,
          md: 2,
        },
        mb: {
          xxs: 2,
          md: 3,
        },
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
