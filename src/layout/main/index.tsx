import { Box } from '@mui/material';
import SideBar from '../../components/sidebar';
import AppBar from '../../components/appbar';

function MainLayout() {
  return (
    <Box
      sx={{
        height: '97vh',
        display: 'flex',
      }}
    >
      <Box>
        <SideBar />
      </Box>
      <Box sx={{ ml: '20px', width: '100%' }}>
        <AppBar />
      </Box>
    </Box>
  );
}

export default MainLayout;
