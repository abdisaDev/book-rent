import { Box, Paper } from "@mui/material";
import Chart from "react-apexcharts";

function AreaChart() {
  return (
    <Box
      sx={{
        my: 2,
        height: "-webkit-fill-available",
      }}
    >
      <Paper
        sx={{
          borderRadius: "15px",
          p: 2,
          boxShadow: "0 0 15px #E1D9D1",
          position: "relative",
        }}
      >
        <Chart
          height={261}
          options={{
            title: {
              text: "Earning Summery",
              align: "left",
              floating: false,
              offsetY: 30,
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#263238",
              },
            },
            chart: { toolbar: { show: false } },
            colors: ["#2982FE", "#000000"],
            legend: {
              position: "top",
              horizontalAlign: "right",
            },
            fill: {
              type: ["gradient", "solid"],
              gradient: {
                type: "vertical",
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100],
                colorStops: [
                  {
                    offset: 0,
                    opacity: 0.5,
                    color: "#2982FE",
                  },
                  {
                    offset: 100,
                    opacity: 0,
                    color: "#2982FE",
                  },
                ],
              },
            },
            grid: {
              borderColor: "#E9E9EB",
              padding: {
                left: 30,
                right: 30,
              },
              xaxis: {
                lines: {
                  show: true,
                },
              },

              yaxis: {
                lines: { show: false },
              },
            },
            stroke: {
              colors: ["#2982FE"],
              curve: "smooth",
              width: 1.5,
              dashArray: [0, 5],
              lineCap: "butt",
              fill: { opacity: 1, colors: ["#000"] },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: {
                show: false,
              },
            },

            tooltip: {
              enabled: true,
            },

            yaxis: {
              show: true,
              min: 0,
              max: 300,
              tickAmount: 3,
              labels: {
                formatter: (value) => {
                  return `${value}k Birr`;
                },
              },
            },
          }}
          series={[
            {
              name: "Last 6 Months",
              type: "area",
              data: [130, 90, 10, 250, 100, 50],
            },
            {
              name: "Same Period last Year",
              type: "line",
              data: [100, 80, 70, 50, 10, 150],
              color: "#B2B2BA",
            },
          ]}
        />
      </Paper>
    </Box>
  );
}

export default AreaChart;
