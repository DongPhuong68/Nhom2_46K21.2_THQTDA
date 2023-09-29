import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import Typography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import authorsTableData from "layouts/orders/components/Bang";
import DataTable from "examples/Tables/DataTable";
import Thongtinchung from "layouts/orders/components/Thongtinchung";
import Thongtinhang from "./components/Thong tin hang";

function Ban() {
  const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={0} pb={5}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                pt={1}
                px={45}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" fontWeight="medium" color="error" textAlign="center">
                  HÓA ĐƠN BÁN HÀNG
                </Typography>
              </MDBox>
              <MDBox pt={1}>
                <Thongtinchung />
              </MDBox>
              <MDBox pt={1}>
                <Thongtinhang />
              </MDBox>
              <MDBox pt={1}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default Ban;
