import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { useMaterialUIController } from "context";

function Filter() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          DANH SÁCH
        </MDTypography>
        <MDButton href="/Nhaphang/HDnhap" variant="gradient" color="success">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          Tạo hóa đơn
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={10} md={4}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDTypography variant="h6" fontWeight="medium">
                Từ ngày
              </MDTypography>
              <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    expand_more
                  </Icon>
                </Tooltip>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={10} md={4}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDTypography variant="h6" fontWeight="medium">
                Đến ngày
              </MDTypography>
              <MDBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    expand_more
                  </Icon>
                </Tooltip>
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item xs={10} md={4}>
            <MDBox p={1}>
              <MDButton variant="gradient" color="info">
                <Icon sx={{ fontWeight: "bold" }}>search</Icon>
                Tìm kiếm
              </MDButton>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Filter;
