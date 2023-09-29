import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import PieChart from "examples/Charts/PieCharts/index";

import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportPieChartData from "layouts/dashboard/data/reportPieChartData";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="production_quantity_limits"
                title="Đơn hàng"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "so với tháng trước",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Số hàng bán"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+7%",
                  label: "so với tháng trước",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="money"
                title="Doanh thu tháng"
                count="20.000.000"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "so với tháng trước",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="leaderboard"
                title="Số hàng còn"
                count="+591"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Mới cập nhật",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={7}>
              <MDBox mb={2}>
                <ReportsBarChart
                  color="info"
                  title="Doanh thu tháng"
                  date="Cập nhật 2 ngày trước"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={4} md={4} lg={5}>
              <MDBox mb={2}>
                <PieChart
                  color="primary"
                  title="Thống kê hàng hóa"
                  date="Cập nhật hàng ngày"
                  chart={reportPieChartData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
