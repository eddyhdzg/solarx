import { useState } from "react";
import { useParams } from "react-router";
import { ProjectIDParams } from "solarx-types";
import { useProject, useQueryParams, useProjectPrice } from "hooks";
import { formatMoney } from "utils";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Skeleton,
  Typography,
  buttonClasses,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckoutProductModal from "./checkoutProductModal/CheckoutProductModal";

export default function CheckoutProduct() {
  const { t } = useTranslation();
  const { id = "" } = useParams<ProjectIDParams>();
  const { qty = "0", pid = "" } = useQueryParams();
  const {
    data: { images = [], name = "" },
  } = useProject(id);
  const {
    data: { unit_amount = 0 },
  } = useProjectPrice(id, pid);
  const total = Number(qty) * unit_amount;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        component="ul"
        sx={{
          display: "flex",
        }}
      >
        <Box
          component="li"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            {images?.length ? (
              <Box
                component="img"
                src={images[0]}
                alt="project"
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: 1,
                  mr: 1,
                  objectFit: "cover",
                }}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={48}
                height={48}
                sx={{
                  borderRadius: 1,
                }}
              />
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="subtitle2">{name}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">
                  {t("pages.crowdfunding.checkout.qty")}
                </Typography>
                <Button
                  variant="text"
                  color="inherit"
                  size="small"
                  onClick={handleOpen}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    px: 1,
                    minWidth: "unset",
                    [`& .${buttonClasses.endIcon}`]: {
                      ml: 0,
                    },
                  }}
                >
                  {qty}
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="subtitle1">{formatMoney(total)}</Typography>
            {Number(qty) > 1 && (
              <Typography variant="body2" color="textSecondary">
                {formatMoney(unit_amount)}{" "}
                {t("pages.crowdfunding.checkout.each")}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <CheckoutProductModal open={open} handleClose={handleClose} />
    </>
  );
}
