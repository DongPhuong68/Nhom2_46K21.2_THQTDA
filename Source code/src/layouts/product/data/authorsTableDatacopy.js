/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

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
      { Header: "Tên Hàng", accessor: "tenhang", width: "30%", align: "left" },
      { Header: "Số lương", accessor: "soluong", align: "left" },
      { Header: "Giá bán", accessor: "gia", align: "left" },
      { Header: "Hạn sử dụng", accessor: "ngaynhap", align: "center" },
      { Header: "Trạng thái", accessor: "trangthai", align: "center" },
      { Header: "Điều chỉnh", accessor: "dieuchinh", align: "center" },
    ],

    rows: [
      {
        mahang: <Author name="MH01" />,
        tenhang: <Author name="Gạo" />,
        soluong: <Job title="50 kg" />,
        gia: <Job title="10.000đ/kg" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Còn hàng" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: <Author name="MH02" />,
        tenhang: <Author name="Sửa vinamilk" />,
        soluong: <Job title="20 thùng" />,
        gia: <Job title="28.000đ/lốc" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Còn hàng" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: <Author name="MH03" />,
        tenhang: <Author name="Kem đánh răng P/s" />,
        soluong: <Job title="30 túp" />,
        gia: <Job title="24.000đ/túp" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Còn hàng" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: <Author name="MH04" />,
        tenhang: <Author name="aquafina 500ml" />,
        soluong: <Job title="10 thùng" />,
        gia: <Job title="5.000đ/chai" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Còn hàng" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: <Author name="MH05" />,
        tenhang: <Author name="Nếp" />,
        soluong: <Job title="50 kg" />,
        gia: <Job title="15.000đ/kg" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Còn hàng" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: <Author name="MH06" />,
        tenhang: <Author name="Gạo tẻ" />,
        soluong: <Job title="0 kg" />,
        gia: <Job title="10.000đ" />,
        trangthai: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Hết hàng" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        ngaynhap: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Sửa" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        mahang: (
          <MDBox
            sx={{
              "& .MuiTextField-root": { m: 1, width: "8ch" },
            }}
          >
            <MDInput />
          </MDBox>
        ),
        tenhang: (
          <MDBox
            sx={{
              "& .MuiTextField-root": { m: 1, width: "17ch" },
            }}
          >
            <MDInput />
          </MDBox>
        ),
        soluong: (
          <MDBox
            sx={{
              "& .MuiTextField-root": { m: 1, width: "10ch" },
            }}
          >
            <MDInput />
          </MDBox>
        ),
        gia: (
          <MDBox
            sx={{
              "& .MuiTextField-root": { m: 1, width: "12ch" },
            }}
          >
            <MDInput />
          </MDBox>
        ),
        ngaynhap: (
          <MDBox
            sx={{
              "& .MuiTextField-root": { m: 1, width: "12ch" },
            }}
          >
            <MDInput />
          </MDBox>
        ),
        trangthai: (
          <MDBox>
            <MDButton variant="gradient" color="error">
              HỦY
            </MDButton>
          </MDBox>
        ),
        dieuchinh: (
          <MDBox ml={-1}>
            <MDButton pt={1} variant="gradient" color="success">
              LƯU
            </MDButton>
          </MDBox>
        ),
      },
    ],
  };
}
