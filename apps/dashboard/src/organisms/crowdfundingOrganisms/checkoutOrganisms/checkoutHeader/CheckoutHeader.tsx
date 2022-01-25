import { Typography } from "@mui/material";
import { useProject, useProjectPrice, useQueryParams } from "hooks";
import { ProjectIDParams } from "solarx-types";
import { useParams } from "react-router-dom";
import { formatMoney } from "utils";
import Styled from "./CheckoutHeader.styled";

export default function CheckoutHeader() {
  const { pid = "", qty = "0" } = useQueryParams();
  const { id } = useParams<ProjectIDParams>();
  const { data: project } = useProject(id);
  const { data: price = {} } = useProjectPrice(id, pid as string);

  const { unit_amount = 0 } = price;
  const totalDisplayPrice = unit_amount * Number(qty);

  return (
    <Styled.Root>
      <Typography variant="subtitle1" color="textSecondary">
        {project?.name}
      </Typography>
      <Typography variant="h4">{formatMoney(totalDisplayPrice)}</Typography>
      <Typography variant="subtitle3" color="textSecondary">
        {price?.description}
      </Typography>
    </Styled.Root>
  );
}
