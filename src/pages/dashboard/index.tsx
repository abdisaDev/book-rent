import { Box } from '@mui/material';
import Statistics from '../../components/statistics';
import Table from '../../components/table';
import { GridColDef } from '@mui/x-data-grid';
import AreaChart from '../../components/AreaChart';
import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'No.', width: 90 },
  {
    field: 'book_number',
    headerName: 'Book no.',
    flex: 1,
  },
  {
    field: 'owner',
    headerName: 'Owner',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <FiberManualRecordIcon
          color={params.row.status === 'Rented' ? 'error' : 'primary'}
          sx={{
            border: `2px solid ${
              params.row.status === 'Rented' ? ' #D32F2F' : ' #1976D2'
            }`,
            borderRadius: '50%',
            fontSize: '20px',
          }}
        />{' '}
        {params.row.status}
      </Box>
    ),
    flex: 1,
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    book_number: 'Snow',
    owner: 'Jon',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    id: 2,
    book_number: 'Lannister',
    owner: 'Cersei',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    id: 3,
    book_number: 'Lannister',
    owner: 'Jaime',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    id: 4,
    book_number: 'Stark',
    owner: 'Arya',
    status: 'Free',
    price: '200 Birr',
  },
  {
    id: 5,
    book_number: 'Targaryen',
    owner: 'Daenerys',
    status: 'Free',
    price: '200 Birr',
  },
  {
    id: 6,
    book_number: 'Melisandre',
    owner: 'Abdisa',
    status: 'Free',
    price: '200 Birr',
  },
  {
    id: 7,
    book_number: 'Clifford',
    owner: 'Ferrara',
    status: 'Free',
    price: '200 Birr',
  },
  {
    id: 8,
    book_number: 'Frances',
    owner: 'Rossini',
    status: 'Free',
    price: '200 Birr',
  },
  {
    id: 9,
    book_number: 'Roxie',
    owner: 'Harvey',
    status: 'Free',
    price: '200 Birr',
  },
];
function AdminDashBoard() {
  return (
    <Box
      sx={{ height: '87vh', display: 'flex', justifyContent: 'space-between' }}
    >
      <Box sx={{ height: '100%' }}>
        <Statistics />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          ml: '20px',
          mt: '20px',
        }}
      >
        <Box>
          <Table
            rows={rows}
            columns={columns}
            isLoading={false}
            title='Live Book Status'
          />
        </Box>
        <Box>
          <AreaChart />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashBoard;
