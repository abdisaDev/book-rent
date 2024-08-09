import { Box, Typography } from '@mui/material';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
  MRT_ToggleDensePaddingButton,
} from 'material-react-table';

function Table(props: {
  title: string;
  data: MRT_RowData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: MRT_ColumnDef<any>[];
}) {
  const table = useMaterialReactTable({
    data: props.data,
    columns: props.columns,
    initialState: { pagination: { pageSize: 6, pageIndex: 0 } },
    muiTablePaperProps: {
      sx: {
        borderRadius: '20px',
        px: 3,
        py: 2.4,
      },
    },
    renderTopToolbar: () => (
      <Box>
        <Typography>{props.title}</Typography>
      </Box>
    ),
    renderToolbarInternalActions: ({ table }) => (
      <Box>
        <MRT_ToggleDensePaddingButton table={table} />
      </Box>
    ),
  });
  return (
    <Box>
      <MaterialReactTable table={table} />
    </Box>
  );
}

export default Table;
