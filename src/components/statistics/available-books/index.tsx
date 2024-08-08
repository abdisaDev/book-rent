import { Box, Chip, Paper, Typography } from '@mui/material';
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: '20px',
            px: '20px',
            width: '100%',
          }}
        >
          <Typography fontWeight='bolder'>Available Books</Typography>
          <Chip
            label='Today'
            size='small'
            sx={{ borderRadius: '5px', backgroundColor: '#F4F5F7' }}
          />
        </Box>
        <Box>
          <PieChart
            title='Available Books'
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A', color: 'green' },
                  { id: 1, value: 15, label: 'series B', color: 'blue' },
                  { id: 2, value: 20, label: 'series C', color: 'red' },
                ],
                startAngle: 0,
                endAngle: 360,
                innerRadius: 65,
                outerRadius: 45,
                cx: 120,
              },
            ]}
            sx={{
              [`& * .MuiChartsLegend-mark`]: {
                rx: '100px',
                height: '15px',
                width: '15px',
              },
              [`& MuiChartsLegend-root`]: {
                margin: '200px',
              },
            }}
            slotProps={{
              legend: {
                itemGap: 10,
                direction: 'column',
                markGap: 10,
                labelStyle: { marginTop: '200px' },
                position: {
                  horizontal: 'middle',
                  vertical: 'bottom',
                },
              },
            }}
            width={400}
            height={200}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default AvailableBooksStatstics;
