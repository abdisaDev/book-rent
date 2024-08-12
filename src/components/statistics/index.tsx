import { Box, Paper, Typography } from '@mui/material';
import IncomeStatstics from './income';
import AvailableBooksStatstics from './available-books';

function Statistics() {
  return (
    <Box
      sx={{
        width: '300px',
        height: '100%',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: '20px',
          borderRadius: '15px',
          height: '-webkit-fill-available',
        }}
      >
        <Box>
          <Typography variant='h6'>This Month Statistics</Typography>
          <Typography variant='body2'>
            {new Date().toDateString()}, {new Date().toLocaleTimeString()}
          </Typography>
        </Box>
        <Box>
          <IncomeStatstics />
        </Box>
        <Box>
          <AvailableBooksStatstics />
        </Box>
      </Paper>
    </Box>
  );
}
export default Statistics;
