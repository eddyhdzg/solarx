import React from "react";
import { Button } from "@mui/material";
import { AccountButton, HideOnScroll } from "components";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import shallow from "zustand/shallow";
import { useStore } from "hooks";
import { Link } from "react-router-dom";
import {
  StyledAppBar,
  StyledToolbar,
  BackButtonWrapper,
  ActionsWrapper,
} from "./Header.styled";

const Header: React.FC = () => {
  const { backButton } = useStore(
    ({ backButton }) => ({ backButton }),
    shallow
  );

  return (
    <HideOnScroll>
      <StyledAppBar position="fixed" color="default">
        <StyledToolbar>
          <BackButtonWrapper>
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
          </BackButtonWrapper>
          <ActionsWrapper>
            <AccountButton />
          </ActionsWrapper>
        </StyledToolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Header;
