import { Box, Paper, Typography } from '@mui/material';

function AppBar() {
  return (
    <Box>
      <Paper
        sx={{
          borderRadius: '20px',
          p: '25px 50px',
          width: '-webkit-fill-available',
        }}
        elevation={0}
      >
        <Typography>
          <span style={{ fontWeight: 'bolder' }}>Admin</span>/
        </Typography>
      </Paper>
    </Box>
  );
}

export default AppBar;
