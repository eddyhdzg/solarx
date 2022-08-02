import { GlobalFilter } from "components";
import { TableInstance } from "react-table";
import { Investor } from "solarx-types";
import { InvestorsTableLayoutRoot } from "./InvestorsTableLayout.styled";
import InvestorsTable from "./investorsTable/InvestorsTable";

interface InvestorsTableLayoutProps {
  table: TableInstance<Investor>;
}

export default function InvestorsTableLayout({
  table,
}: InvestorsTableLayoutProps) {
  return (
    <>
      <InvestorsTableLayoutRoot>
        <GlobalFilter />
      </InvestorsTableLayoutRoot>
      <InvestorsTable {...table} />
    </>
  );
}
