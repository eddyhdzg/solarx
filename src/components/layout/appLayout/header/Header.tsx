import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { AccountButton, HideOnScroll } from "components";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import shallow from "zustand/shallow";
import { useStore } from "hooks";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { backButton } = useStore(
    ({ backButton }) => ({ backButton }),
    shallow
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          paddingTop: "env(safe-area-inset-top)",
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            pl: {
              sm: 10,
            },
          }}
        >
          <Box
            sx={{
              ml: "env(safe-area-inset-left)",
            }}
          >
            <div>
              {backButton.text && backButton.url && (
                <Button
                  startIcon={<ArrowBackRoundedIcon />}
                  component={Link}
                  to={backButton.url}
                  color="primary"
                >
                  {backButton.text}
                </Button>
              )}
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                ml: 1,
                mr: "env(safe-area-inset-right)",
              }}
            >
              <AccountButton />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
