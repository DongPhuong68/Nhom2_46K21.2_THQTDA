import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Filter from "layouts/import/Nhap/Filter";
import BangDS from "layouts/import/Nhap/BangDS";

function DSNHAP() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={0} pb={5}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={1}>
                <Filter />
              </MDBox>
              <MDBox pt={2}>
                <BangDS />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
export default DSNHAP;
