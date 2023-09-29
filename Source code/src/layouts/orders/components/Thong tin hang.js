import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Thongtinhang() {
  return (
    <Card id="delete-account">
      <MDBox p={1}>
        <Grid container spacing={3}>
          <MDBox pt={1} px={3} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium" item xs={12} md={10} lg={18}>
              Thông tin mặt hàng
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
                label="Mã hàng"
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
                label="Tên hàng hóa"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox p={1}>
        <Grid container spacing={3}>
          <MDBox pt={1} px={12} display="flex" justifyContent="space-between" alignItems="center" />
          <Grid item xs={12} md={10} lg={8}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={1}
            >
              <TextField
                id="outlined-number"
                label="Số lượng bán"
                type="text"
                fontSize="12"
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

export default Thongtinhang;
