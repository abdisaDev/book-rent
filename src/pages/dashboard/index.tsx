import { Box } from '@mui/material';
import Statistics from '../../components/statistics';
import Table from '../../components/table';
import AreaChart from '../../components/AreaChart';
import { useMemo } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
interface BookStatus {
  book_number: string;
  owner: string;
  status: string;
  price: string;
}

const data: BookStatus[] = [
  {
    book_number: 'Snow',
    owner: 'Jon',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    book_number: 'Lannister',
    owner: 'Cersei',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    book_number: 'Lannister',
    owner: 'Jaime',
    status: 'Rented',
    price: '200 Birr',
  },
  {
    book_number: 'Stark',
    owner: 'Arya',
    status: 'Free',
    price: '200 Birr',
  },
  {
    book_number: 'Targaryen',
    owner: 'Daenerys',
    status: 'Free',
    price: '200 Birr',
  },
  {
    book_number: 'Melisandre',
    owner: 'Abdisa',
    status: 'Free',
    price: '200 Birr',
  },
  {
    book_number: 'Clifford',
    owner: 'Ferrara',
    status: 'Free',
    price: '200 Birr',
  },
  {
    book_number: 'Frances',
    owner: 'Rossini',
    status: 'Free',
    price: '200 Birr',
  },
  {
    book_number: 'Roxie',
    owner: 'Harvey',
    status: 'Free',
    price: '200 Birr',
  },
];

function AdminDashBoard() {
  const columns = useMemo<MRT_ColumnDef<BookStatus>[]>(
    () => [
      {
        accessorKey: 'book_number',
        header: 'Book No.',
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'price',
        header: 'Price',
      },
    ],
    []
  );

  return (
    <Box
      sx={{
        height: '87vh',
        display: 'flex',
        justifyContent: 'space-between',
      }}
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
        }}
      >
        <Box>
          <Table
            columns={columns}
            data={data}
            title='Live Book Status'
            pageSize={6}
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
