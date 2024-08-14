import { Box, Chip, Switch, Typography } from '@mui/material';
import Table from '../../components/table';
import { useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import useFetchUser from '../../hooks/fetchUser';

function Books() {
  const { data, isSuccess, refetch, isLoading } = useQuery({
    queryKey: ['fetch-owners'],
    queryFn: useFetchUser,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'author',
        header: 'Author',
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
        Cell: () => <Typography>{data?.name}</Typography>,
      },
      {
        accessorKey: 'category',
        header: 'Category',
      },
      {
        accessorKey: 'name',
        header: 'Book Name',
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
    ],
    []
  );
  const books =
    isSuccess &&
    data.data.map((user) => {
      console.log(user);
      return { owner: data.data.name, ...user.books };
    });
  console.log(books[0]);
  return (
    <Box>
      <Table
        columns={columns}
        data={isSuccess ? books : []}
        title='List Of Books'
        pageSize={10}
      />
    </Box>
  );
}

export default Books;
