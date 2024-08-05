import { Box, Chip, Divider, Paper, Typography } from '@mui/material';

function Statistics() {
  return (
    <Box
      sx={{
        my: '20px',
        width: '300px',
      }}
    >
      <Paper elevation={0} sx={{ p: '40px' }}>
        <Box>
          <Typography variant='h6'>This Month Statistics</Typography>
          <Typography variant='body2'>
            {new Date().toDateString()}, {new Date().toLocaleTimeString()}
          </Typography>
        </Box>
        <Box sx={{ my: '20px' }}>
          <Paper>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: '20px',
                width: '100%',
              }}
            >
              <Typography>Income</Typography>
              <Chip label='This Month' />
            </Box>
            <Divider />
            <Box sx={{ my: '20px' }}></Box>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
export default Statistics;
