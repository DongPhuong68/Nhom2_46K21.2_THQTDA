import Dashboard from "layouts/dashboard";
import Product from "layouts/product";
import Orders from "layouts/orders";
import Import from "layouts/import";
import { Icon } from "@mui/material";
import DSNHAP from "layouts/import/Nhap";
import DSBAN from "layouts/orders/Ban";
import ThemHH from "layouts/product/data";

const routes = [
  {
    type: "collapse",
    name: "Thống kê",
    icon: <Icon fontSize="small">dashboard</Icon>,
    key: "thongke",
    route: "/Thongke",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Hàng hóa",
    icon: <Icon frontsize="small">table_view</Icon>,
    key: "hanghoa",
    route: "/HangHoa",
    component: <Product />,
  },
  {
    type: "collapse",
    name: "Nhập hàng",
    icon: <Icon frontsize="small">arrow_circle_up</Icon>,
    key: "nhaphang",
    route: "/Nhaphang",
    component: <DSNHAP />,
  },
  {
    type: "collapse",
    name: "Bán hàng",
    icon: <Icon frontsize="small">local_mall</Icon>,
    key: "banhang",
    route: "/Banhang",
    component: <DSBAN />,
  },
  {
    type: "collapse",
    name: "",
    // icon: <Icon frontsize="small">arrow_circle_up</Icon>,
    key: "nhaphang",
    route: "/Nhaphang/HDban",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "",
    // icon: <Icon frontsize="small">arrow_circle_up</Icon>,
    key: "nhaphang",
    route: "/Nhaphang/HDnhap",
    component: <Import />,
  },
  {
    type: "collapse",
    key: "hanghoa",
    route: "/HangHoa/Them",
    component: <ThemHH />,
  },
];
export default routes;
