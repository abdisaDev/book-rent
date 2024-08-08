import { Box } from '@mui/material';
import Chart from 'react-apexcharts';

function AreaChart() {
  return (
    <Box>
      <Chart
        options={{
          chart: {
            type: 'line',
            height: 350,
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          },
        }}
        type='line'
        series={[
          {
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ]}
      />
    </Box>
  );
}

export default AreaChart;
