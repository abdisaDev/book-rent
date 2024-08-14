import { Box, Chip, IconButton, Typography } from '@mui/material';
import Statistics from '../../../components/statistics';
import Table from '../../../components/table';
import AreaChart from '../../../components/AreaChart';
import { useMemo } from 'react';
import { type MRT_ColumnDef } from 'material-react-table';
import {
  FiberManualRecord as FiberManualRecordIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

interface BookStatus {
  book_number: string;
  owner: string;
  status: string;
  price: string;
}

const { books: data } = JSON.parse(localStorage.getItem('user')!);

function OwnerDashBoard() {
  const columns = useMemo<MRT_ColumnDef<BookStatus>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Book No.',
        Cell: ({ cell }) => (
          <Box>
            <Chip
              label={String(cell.getValue())}
              size='small'
              sx={{ px: 4, borderRadius: '5px' }}
            />
          </Box>
        ),
      },
      {
        accessorKey: 'author',
        header: 'Owner',
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ cell }) => {
          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: 1,
                height: 'fit-content',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FiberManualRecordIcon
                  color={cell.getValue() ? 'primary' : 'error'}
                  sx={{
                    border: `2px solid ${
                      cell.getValue() ? '#1976D2' : '#D32F2F'
                    }`,
                    borderRadius: '50%',
                    fontSize: '20px',
                  }}
                />
              </Box>
              <Box>
                <Typography>{cell.getValue() ? 'Free' : 'Rented'}</Typography>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: 'price',
        header: 'Price',
        Cell: ({ cell }) => (
          <Box>
            <Typography>{String(cell.getValue())} Birr</Typography>
          </Box>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: () => {
          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: 1,
                height: 'fit-content',
              }}
            >
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton color='error'>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        },
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

export default OwnerDashBoard;
