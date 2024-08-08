import { Box } from '@mui/material';
import SideBar from '../../components/sidebar';
import AppBar from '../../components/appbar';
import { Outlet } from 'react-router-dom';
import Statistics from '../../components/statistics';

function MainLayout() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          height: '97vh',
        }}
      >
        <Box>
          <SideBar />
        </Box>
        <Box sx={{ ml: '20px', width: '100%' }}>
          <Box>
            <AppBar />
          </Box>
          <Box sx={{ height: '87vh' }}>
            <Statistics />
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
