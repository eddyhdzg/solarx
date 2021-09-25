import { Tab as MuiTab, TabProps } from "@mui/material";

const Segment: React.FC<TabProps> = (props) => {
  return (
    <MuiTab
      sx={{
        "&.MuiTab-root": {
          "&:hover": {
            opacity: 1,
          },
          "&:focus": {
            opacity: 1,
          },
          py: {
            xxs: 2,
            xs: 2.5,
          },
          px: {
            xxs: 5,
            xs: 6,
          },
          fontSize: {
            xxs: "14px",
            md: "16px",
          },
        },
        "&.Mui-selected": {
          color: (theme) => theme.palette.text.primary,
        },
      }}
      {...props}
    />
  );
};

export default Segment;
