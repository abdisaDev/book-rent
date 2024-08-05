import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box
      sx={{
        p: '12px',
        backgroundColor: '#EFF1FE',
      }}
    >
      <Outlet />
      <CssBaseline />
    </Box>
  );
}

export default App;
