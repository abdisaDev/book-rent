import { Box, Paper, Typography } from '@mui/material';

function AppBar(props: { title: string }) {
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
          <span style={{ fontWeight: 'bolder' }}>Admin</span>/{props.title}
        </Typography>
      </Paper>
    </Box>
  );
}

export default AppBar;
