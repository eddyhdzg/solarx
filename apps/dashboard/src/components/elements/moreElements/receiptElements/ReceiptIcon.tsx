import { Box } from "@mui/material";
import logo from "assets/images/logo.svg";

export default function ReceiptIcon() {
  return (
    <Box
      sx={[
        {
          width: 64,
          height: 64,
          padding: 0.25,
          borderRadius: 1,
        },
        (theme) => ({
          background: theme.custom.gradient,
        }),
      ]}
    >
      <Box
        sx={[
          {
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          },
          (theme) => ({
            backgroundImage: theme.custom.elevation[3],
          }),
        ]}
      >
        <img src={logo} height={24} width={24} alt="nav-logo" />
      </Box>
    </Box>
  );
}
