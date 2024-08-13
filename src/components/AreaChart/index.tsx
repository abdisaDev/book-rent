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
            chart: { offsetY: 20 },
            colors: ["#2982FE", "#000000"],
            legend: {
              position: "top",
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
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
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
              name: "red",
              type: "area",
              data: [130, 90, 10, 250, 100, 50, 32, 41, 6, 12, 76, 12],
            },
            {
              name: "red",
              type: "line",
              data: [100, 80, 70, 50, 10, 150, 65, 23, 65, 123, 65, 75],
              color: "#B2B2BA",
            },
          ]}
        />
      </Paper>
    </Box>
  );
}

export default AreaChart;
