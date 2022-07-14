import { useState } from "react";
import { useParams } from "react-router";
import { ProjectIDParams } from "solarx-types";
import { useProject, useQueryParams, useProjectPrice } from "hooks";
import { Skeleton, Typography } from "@mui/material";
import { formatMoney } from "utils";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckoutProductModal from "./checkoutProductModal/CheckoutProductModal";
import Styled from "./CheckoutProducts.styled";

export default function CheckoutProduct() {
  const { t } = useTranslation();
  const { id } = useParams<ProjectIDParams>();
  const { qty = "0", pid = "" } = useQueryParams();
  const {
    data: { images = [], name = "" },
  } = useProject(id || "");
  const {
    data: { unit_amount = 0 },
  } = useProjectPrice(id, pid);

  const total = Number(qty) * unit_amount;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Styled.Ul>
        <Styled.Li>
          <Styled.Container>
            {images?.length ? (
              <Styled.Img src={images[0]} alt="project" />
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
            <Styled.Data>
              <Typography variant="subtitle3">{name}</Typography>
              <Styled.Button
                variant="text"
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                size="small"
                onClick={handleOpen}
              >
                {t("pages.crowdfunding.checkout.qty")} {qty}
              </Styled.Button>
            </Styled.Data>
          </Styled.Container>
          <Styled.Numbers>
            <Typography variant="subtitle1">{formatMoney(total)}</Typography>
            {Number(qty) > 1 && (
              <Typography variant="body2" color="textSecondary">
                {formatMoney(unit_amount)}{" "}
                {t("pages.crowdfunding.checkout.each")}
              </Typography>
            )}
          </Styled.Numbers>
        </Styled.Li>
      </Styled.Ul>
      <CheckoutProductModal open={open} handleClose={handleClose} />
    </>
  );
}
