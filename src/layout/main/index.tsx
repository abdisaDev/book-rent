import { Box } from '@mui/material';
import SideBar from '../../components/sidebar';
import AppBar from '../../components/appbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          width: '98vw',
          p: 2,
        }}
      >
        <Box>
          <SideBar />
        </Box>
        <Box sx={{ ml: '20px', width: '100%' }}>
          <Box>
            <AppBar />
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
