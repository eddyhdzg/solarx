import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatAbsoluteWithCurreny } from "utils";
import { useQueryParams, useUserHistoryDoc } from "hooks";
import { useUser } from "reactfire";

export default function ReceiptSummary() {
  const { t } = useTranslation();
  const { id } = useQueryParams();
  const user = useUser();
  const { data } = useUserHistoryDoc(user.data?.uid, id);
  const title = data?.title || "-";
  const description = data?.description || "-";
  const amount =
    typeof data?.amount === "number"
      ? formatAbsoluteWithCurreny(data?.amount, data?.currency)
      : "-";
  const each =
    Number(data?.qty) > 1 &&
    `${formatAbsoluteWithCurreny(
      (data?.amount || 0) / Number(data?.qty),
      data?.currency
    )} ${t("pages.more.receipt.each")}`;

  return (
    <Box
      sx={{
        mb: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{
          mb: 2,
        }}
      >
        {t("pages.more.receipt.summary")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mr: 1.5,
          }}
        >
          {data?.avatar && (
            <Box
              component="img"
              src={data?.avatar}
              height={48}
              width={48}
              alt="project-avatar"
              sx={{
                borderRadius: 1,
                mr: 1.5,
              }}
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: each ? "space-between" : "center",
            textAlign: "right",
          }}
        >
          <Typography variant="subtitle1">{amount}</Typography>
          {each && (
            <Typography variant="body2" color="textSecondary">
              {each}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
