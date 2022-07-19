import React from "react";
import { AccountButton, HideOnScroll } from "atomic";
import shallow from "zustand/shallow";
import { useStore } from "hooks";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Box } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function NavBar() {
  const { backButton } = useStore(
    ({ backButton }) => ({ backButton }),
    shallow
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="default"
        sx={(theme) => ({
          paddingTop: "env(safe-area-inset-top)",
          zIndex: theme.zIndex.drawer - 1,
        })}
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
            {backButton.text && backButton.url && (
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                component={Link}
                to={backButton.url}
                color="primary"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {backButton.text}
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 1,
              marginRight: "env(safe-area-inset-right)",
            }}
          >
            <AccountButton />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}