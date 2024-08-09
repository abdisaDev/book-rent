import { Box, Paper } from '@mui/material';
import Chart from 'react-apexcharts';

function AreaChart() {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Paper
        sx={{
          borderRadius: '15px',
          p: 2,
          boxShadow: '0 0 15px #E1D9D1',
          position: 'relative',
        }}
      >
        <Chart
          height={261}
          options={{
            chart: { offsetY: 20 },
            colors: ['#2982FE', '#000000'],
            fill: {
              type: ['gradient', 'solid'],
              gradient: {
                type: 'vertical',
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100],
                colorStops: [
                  {
                    offset: 0,
                    opacity: 0.2,
                    color: '#2982FE',
                  },
                  {
                    offset: 100,
                    opacity: 0,
                    color: '#2982FE',
                  },
                ],
              },
            },
            grid: {
              borderColor: 'rgba(0,0,0,0)',
            },
            stroke: {
              colors: ['#2982FE'],
              curve: 'smooth',
              width: 2,
              dashArray: [0, 5],
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              axisBorder: {
                show: false,
              },
              crosshairs: {
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
              name: 'red',
              type: 'area',
              data: [130, 90, 10, 250, 100, 50, 32, 41, 6, 12, 76, 12],
            },
            {
              name: 'red',
              type: 'line',
              data: [100, 80, 70, 50, 10, 150, 65, 23, 65, 123, 65, 75],
              color: '#B2B2BA',
            },
          ]}
        />
      </Paper>
    </Box>
  );
}

export default AreaChart;
