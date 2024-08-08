import { Box, Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

function AvailableBooksStatstics() {
  return (
    <Box>
      <Paper
        sx={{
          boxShadow: '0 0 10px #E1D9D1A0',
          borderRadius: '10px',
        }}
      >
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
        />
      </Paper>
    </Box>
  );
}

export default AvailableBooksStatstics;
