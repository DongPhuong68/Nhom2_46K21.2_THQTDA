import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import MDBox from "components/MDBox";

import MDTypography from "components/MDTypography";

function Thongtinchung() {
  return (
    <Card id="delete-account">
      <MDBox p={1}>
        <Grid container spacing={3}>
          <MDBox pt={1} px={4} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium" item xs={12} md={10} lg={18}>
              Thông tin chung
            </MDTypography>
          </MDBox>
          <Grid item xs={12} md={8} lg={4}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1}
            >
              <TextField
                id="outlined-number"
                label="Mã hóa đơn"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={8} lg={5}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1}
            >
              <TextField
                id="outlined-number"
                label="Ngày nhập"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Thongtinchung;
