import { useState } from "react";
import { Paper } from "@material-ui/core";
import {
  DataGrid,
  GridPageChangeParams,
  GridToolbarContainer,
  GridToolbarColumnsButton,
} from "@material-ui/data-grid";
import useStyles from "./projectsTable.jss";
import CustomLoading from "../customLoading/CustomLoading";
import CustomPagination from "../customPagination/CustomPagination";
import { columns } from "../../projects.utils";
import { Project } from "types";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
    </GridToolbarContainer>
  );
}

interface IProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: IProjectsTableProps) {
  const classes = useStyles();
  const [pageSize, setPageSize] = useState(5);

  const handlePageSizeChange = (params: GridPageChangeParams) => {
    setPageSize(params.pageSize);
  };

  return (
    <Paper elevation={2} className={classes.projectsTable_paper}>
      <div className={classes.projectsTable_container}>
        <DataGrid
          autoHeight
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          rows={projects}
          columns={columns}
          components={{
            LoadingOverlay: CustomLoading,
            Pagination: CustomPagination,
            Toolbar: CustomToolbar,
          }}
          isRowSelectable={() => false}
          disableDensitySelector
          disableColumnMenu
        />
      </div>
    </Paper>
  );
}
