import { Box } from '@mui/material';
import Statistics from '../../components/statistics';

function AdminDashBoard() {
  return (
    <Box sx={{ height: '87vh' }}>
      <Box sx={{ height: '100%' }}>
        <Statistics />
      </Box>
    </Box>
  );
}

export default AdminDashBoard;
