import { Box, Link, Typography } from "@mui/material";
import StripeLogo from "assets/icons/Stripe";
import { useTranslation } from "react-i18next";

export default function CheckoutFooter() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "&>:first-child": {
          borderRight: "1px solid rgba(255,255,255,.1)",
          pr: 3,
        },
        "&>:not(:first-child)": {
          pl: 3,
        },
      }}
    >
      <Link href="https://stripe.com/">
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {t("pages.crowdfunding.checkout.poweredBy")}
          <StripeLogo width="40px" opacity={0.7} />
        </Typography>
      </Link>
      <Typography variant="caption" color="textSecondary">
        {t("pages.crowdfunding.checkout.terms")}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {t("pages.crowdfunding.checkout.privacy")}
      </Typography>
    </Box>
  );
}
