import { Box, CircularProgress } from "@mui/material";

const CenterLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CenterLoader;
