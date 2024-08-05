import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box
      sx={{
        p: '15px',
        height: '100vh',
      }}
    >
      <Outlet />
      <CssBaseline />
    </Box>
  );
}

export default App;
