import { Box, Typography } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  MRT_ShowHideColumnsButton,
} from 'material-react-table';

function Table(props: {
  title: string;
  data: MRT_RowData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: MRT_ColumnDef<any>[];
  pageSize: number;
  isLoading?: boolean;
}) {
  const table = useMaterialReactTable({
    data: props.data,
    columns: props.columns,
    initialState: { pagination: { pageSize: props.pageSize, pageIndex: 0 } },
    state: {
      isLoading: props.isLoading,
    },
    muiTablePaperProps: {
      sx: {
        borderRadius: '15px',
        px: 3,
        py: 2.4,
      },
    },
    renderTopToolbar: () => (
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mx: 2, my: 1 }}
      >
        <Box>
          <Typography variant='h6' fontWeight='bold'>
            {props.title}
          </Typography>
        </Box>
        <Box>
          <MRT_ToggleGlobalFilterButton table={table} size='small' />
          <MRT_ToggleFiltersButton table={table} size='small' />
          <MRT_ToggleDensePaddingButton table={table} size='small' />
          <MRT_ToggleFullScreenButton table={table} size='small' />
          <MRT_ShowHideColumnsButton table={table} size='small' />
        </Box>
      </Box>
    ),
    enableRowNumbers: true,
    rowNumberDisplayMode: 'original',
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
}

export default Table;
