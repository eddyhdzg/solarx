import { Box } from "@mui/material";
import UsersTable from "./usersTable/UsersTable";
import { GlobalFilter } from "components";

interface IUsersTableLayoutProps {
  setGlobalFilter: any;
  table: any;
}

export default function UsersTableLayout({
  setGlobalFilter,
  table,
}: IUsersTableLayoutProps) {
  return (
    <>
      <Box
        sx={{
          mb: 1,
          display: {
            sm: "flex",
          },
          alignItems: {
            sm: "center",
          },
          justifyContent: {
            sm: "flex-end",
          },
        }}
      >
        <GlobalFilter
          globalFilter={table.state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </Box>
      <UsersTable {...table} />
    </>
  );
}
