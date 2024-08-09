import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { Box, Typography, styled } from '@mui/material';

const Toolbar = styled(GridToolbar)(() => ({
  // Your custom styles here to hide labels
  '& .MuiDataGrid-toolbarContainer .MuiButtonBase-root': {
    '& .MuiButton-label': {
      display: 'none',
    },
  },
}));

function SearchToolBar(props: { title: string }) {
  return (
    <GridToolbarContainer
      sx={{
        justifyContent: 'space-between',
        my: '10px',
        mx: '30px',
      }}
    >
      <Box>
        <Typography variant='h6' fontWeight='700'>
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', columnGap: 2 }}>
        <Box>
          <GridToolbarQuickFilter variant='standard' />
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </GridToolbarContainer>
  );
}

function Table(props: {
  rows: GridRowsProp;
  columns: GridColDef[];
  isLoading: boolean;
  errorMessage?: string | undefined;
  title: string;
}) {
  return (
    <Box>
      <DataGrid
        sx={{
          boxShadow: '0 0 20px #E1D9D1',
          backgroundColor: 'white',
          borderRadius: '15px',
          px: 2,
        }}
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: true,
            },
          },
        }}
        loading={props.isLoading}
        slotProps={{
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
          toolbar: {
            showQuickFilter: true,
          },
        }}
        slots={{
          toolbar: () => (
            <Box>
              <SearchToolBar title={props.title} />
            </Box>
          ),
        }}
        pageSizeOptions={[13]}
        localeText={{ noRowsLabel: props.errorMessage }}
      />
    </Box>
  );
}

export default Table;
