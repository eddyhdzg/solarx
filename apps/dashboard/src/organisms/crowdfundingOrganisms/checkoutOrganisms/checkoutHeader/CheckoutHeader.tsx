import { Box, Typography } from "@mui/material";
import { useProject, useProjectPrice, useQueryParams } from "hooks";
import { ProjectIDParams } from "solarx-types";
import { useParams } from "react-router-dom";
import { formatMoney } from "utils";

export default function CheckoutHeader() {
  const { pid = "", qty = "0" } = useQueryParams();
  const { id } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { data: price = {} } = useProjectPrice(id, pid);
  const { unit_amount = 0 } = price;
  const totalDisplayPrice = unit_amount * Number(qty);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xxs: "center",
          md: "flex-start",
        },
        borderStartEndRadius: {
          md: 0,
        },
        borderEndStartRadius: {
          md: 1,
        },
      }}
    >
      <Typography variant="subtitle1" color="textSecondary">
        {project?.name}
      </Typography>
      <Typography variant="h4">{formatMoney(totalDisplayPrice)}</Typography>
      <Typography variant="subtitle3" color="textSecondary">
        {price?.description}
      </Typography>
    </Box>
  );
}
