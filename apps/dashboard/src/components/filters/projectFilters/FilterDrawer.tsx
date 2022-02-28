import { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  Divider,
  drawerClasses,
  Typography,
} from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useBreakpoint, useRouterState } from "hooks";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

interface FilterDrawerProps {
  count: number;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ count, children }) => {
  const { t } = useTranslation();
  const sm = useBreakpoint("sm");
  const anchor: "right" | "bottom" = sm ? "right" : "bottom";
  const {
    resetParams,
    values: { funded = "", basePriceFrom = "", basePriceTo = "" },
  } = useRouterState();
  const [open, setOpen] = useState(false);
  const [badge, setBadge] = useState(0);

  const toggleDrawer =
    (value: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(value);
    };

  const handleReset = () => {
    setOpen(false);
    resetParams();
  };

  useEffect(() => {
    let count = 0;
    if (funded) count++;
    if (basePriceFrom && basePriceTo) count++;
    setBadge(count);
  }, [funded, basePriceFrom, basePriceTo]);

  return (
    <div>
      <Button onClick={toggleDrawer(true)} color="inherit">
        <FilterListRoundedIcon
          sx={{
            mr: 1,
          }}
        />
        {t("filters.filters")}

        {Boolean(badge) && (
          <Box
            sx={{
              ml: 1,
              width: 24,
              height: 24,
              backgroundColor: "primary.main",
              color: "black",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {badge}
          </Box>
        )}
      </Button>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          [`& .${drawerClasses.paper}`]: {
            overflow: "hidden",
            borderTopLeftRadius: 12,
            borderTopRightRadius: {
              xxs: 12,
              sm: 0,
            },
            borderBottomLeftRadius: {
              sm: 12,
            },
          },
        }}
      >
        <Box
          sx={{
            width: anchor === "bottom" ? "auto" : 440,
          }}
          role="presentation"
        >
          <Box
            sx={{
              py: 2,
              px: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button color="primary" onClick={handleReset} size="large">
              {t("forms.reset", {
                postProcess: "capitalize",
              })}
            </Button>
            <Typography variant="subtitle1">
              {count} {t("filters.results")}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={toggleDrawer(false)}
              color="secondary"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          {children}
        </Box>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
