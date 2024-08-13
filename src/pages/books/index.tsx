import { Box, Chip, Switch, Typography } from "@mui/material";
import Table from "../../components/table";
import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";

function Books() {
  const data = JSON.parse(localStorage.getItem("user")!);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "author",
        header: "Author",
      },
      {
        accessorKey: "owner",
        header: "Owner",
        Cell: () => <Typography>{data.name}</Typography>,
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "name",
        header: "Book Name",
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return (
            <Box>
              <Chip
                label={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {value ? (
                      <CheckIcon fontSize="small" color="success" />
                    ) : (
                      <CloseIcon fontSize="small" color="error" />
                    )}
                    <Box>{value ? "Active" : "Inactive"}</Box>
                    <Switch
                      checked={Boolean(value)}
                      color={value ? "success" : "error"}
                      size="small"
                    />
                  </Box>
                }
                sx={{
                  backgroundColor: value ? "#E6F3E6" : "#FEE2E2",
                  borderRadius: "10px",
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

  return (
    <Box>
      <Table
        columns={columns}
        data={data.books}
        title="List Of Books"
        pageSize={10}
      />
    </Box>
  );
}

export default Books;
