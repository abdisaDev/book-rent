import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Box
      sx={{
        width: '100vw',
        backgroundColor: '#EFF1FE',
        overflow: 'hidden',
      }}
    >
      <Outlet />
      <CssBaseline />
    </Box>
  );
}

export default App;
