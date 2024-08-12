import { useQuery } from '@tanstack/react-query';
import useFetchUser from '../../hooks/fetchUser';
import { Box, Button, Chip, IconButton, Switch } from '@mui/material';
import Table from '../../components/table';
import { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

function Owners() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'owner',
        header: 'Owner',
      },
      {
        accessorKey: 'location',
        header: 'Location',
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return (
            <Box>
              <Chip
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {value ? (
                      <CheckIcon fontSize='small' color='success' />
                    ) : (
                      <CloseIcon fontSize='small' color='error' />
                    )}
                    <Box>{value ? 'Active' : 'Inactive'}</Box>
                    <Switch
                      checked={Boolean(value)}
                      color={value ? 'success' : 'error'}
                      size='small'
                    />
                  </Box>
                }
                sx={{
                  backgroundColor: value ? '#E6F3E6' : '#FEE2E2',
                  borderRadius: '10px',
                  px: 2,
                }}
              />
            </Box>
          );
        },
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ cell }) => (
          <>
            <IconButton>
              <VisibilityIcon />
            </IconButton>
            <IconButton color='error'>
              <DeleteIcon />
            </IconButton>
          </>
        ),
      },
      {
        accessorKey: 'status',
        header: '',
        Cell: ({ cell }) => (
          <>
            <Chip
              label={cell.getValue() ? 'Approved' : 'Approve'}
              size='small'
              sx={{
                backgroundColor: cell.getValue() ? '#00ABFF' : '#AFAFAF',
                color: '#FFF',
                borderRadius: '5px',
              }}
            />
          </>
        ),
      },
    ],
    []
  );

  //   const { data, isSuccess, isLoading, isError } = useQuery({
  //     queryKey: ['fetch-owners'],
  //     queryFn: useFetchUser,
  //   });

  const data = [
    {
      id: 2,
      owner: 'abdisa',
      password: '123',
      location: '1',
      phone_number: '0987813969',
      role: 'owner',
      status: true,
      revenue: 0,
    },
  ];
  return (
    <Box>
      <Table
        columns={columns}
        data={data}
        title='List Of Owners'
        pageSize={10}
      />
    </Box>
  );
}

export default Owners;
