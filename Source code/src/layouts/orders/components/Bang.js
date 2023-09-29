/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
// import { Icon } from "@mui/material";

export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Mã hàng", accessor: "mahang", width: "15%", align: "left" },
      { Header: "Tên Hàng hóa", accessor: "tenhang", width: "35%", align: "left" },
      { Header: "Giá nhập", accessor: "gia", align: "left" },
      { Header: "Số lượng nhập", accessor: "trangthai", align: "center" },
      { Header: "Thành tiền (VNĐ)", accessor: "ngaynhap", align: "center" },
    ],

    rows: [
      {
        mahang: <Author name="" />,
        tenhang: <Author name="" />,
        soluong: <Job title="" />,
        gia: <Job title="" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: <Author name="" />,
      },
      {
        mahang: <Author name="" />,
        tenhang: <Author name="" />,
        soluong: <Job title="" />,
        gia: <Job title="Tổng thanh toán" />,
        trangthai: (
          <MDBox ml={-1}>
            {/* <MDButton variant="gradient" color="secondary" defaultValue="large">
              _________________
            </MDButton> */}
            <MDInput />
          </MDBox>
        ),
        ngaynhap: <Author name="" />,
      },
      {
        ngaynhap: (
          <MDBox ml={-1}>
            {/* <MDBadge badgeContent="HỦY" color="error" variant="gradient" size="large" />
            <MDBadge badgeContent="LƯU" color="success" variant="gradient" size="large" /> */}
            <MDButton variant="gradient" color="error">
              HỦY
            </MDButton>
            <MDButton pt={1} variant="gradient" color="success">
              LƯU
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
