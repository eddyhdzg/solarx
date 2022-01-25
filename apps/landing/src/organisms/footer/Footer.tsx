import { Box, IconButton, Link } from "@mui/material";
import { socialMediaLinks } from "constant";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mb: 4,
      }}
    >
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "center",
          "&> :not(:last-child)": {
            mr: 2,
          },
        }}
      >
        {socialMediaLinks.map((link) => (
          <li key={link.ariaLabel}>
            <IconButton
              aria-label={link.ariaLabel}
              component={Link}
              disabled={link.disabled}
              href={link.href}
              size="large"
              target="_blank"
            >
              <link.Component />
            </IconButton>
          </li>
        ))}
      </Box>
    </Box>
  );
}
