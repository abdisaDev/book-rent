import { Box, Typography } from "@mui/material";
import Statistics from "../../../components/statistics";
import Table from "../../../components/table";
import AreaChart from "../../../components/AreaChart";
import { useMemo } from "react";
import { type MRT_ColumnDef } from "material-react-table";
import { FiberManualRecord as FiberManualRecordIcon } from "@mui/icons-material";

interface BookStatus {
  id: number;
  book_number: string;
  owner: string;
  status: string;
  price: string;
}

const data: BookStatus[] = [
  {
    id: 1,
    book_number: "Snow",
    owner: "Jon",
    status: "Rented",
    price: "200 Birr",
  },
  {
    id: 2,
    book_number: "Lannister",
    owner: "Cersei",
    status: "Rented",
    price: "200 Birr",
  },
  {
    id: 3,
    book_number: "Lannister",
    owner: "Jaime",
    status: "Rented",
    price: "200 Birr",
  },
  {
    id: 4,
    book_number: "Stark",
    owner: "Arya",
    status: "Free",
    price: "200 Birr",
  },
  {
    id: 5,
    book_number: "Targaryen",
    owner: "Daenerys",
    status: "Free",
    price: "200 Birr",
  },
  {
    id: 6,
    book_number: "Melisandre",
    owner: "Abdisa",
    status: "Free",
    price: "200 Birr",
  },
  {
    id: 7,
    book_number: "Clifford",
    owner: "Ferrara",
    status: "Free",
    price: "200 Birr",
  },
  {
    id: 8,
    book_number: "Frances",
    owner: "Rossini",
    status: "Free",
    price: "200 Birr",
  },
  {
    id: 9,
    book_number: "Roxie",
    owner: "Harvey",
    status: "Free",
    price: "200 Birr",
  },
];

function AdminDashBoard() {
  const columns = useMemo<MRT_ColumnDef<BookStatus>[]>(
    () => [
      {
        accessorKey: "id",
        header: "No.",
      },
      {
        accessorKey: "book_number",
        header: "Book No.",
      },
      {
        accessorKey: "owner",
        header: "Owner",
        Cell: ({ cell }) => {
          return (
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
              <Box>
                <img
                  src="https://avatars.githubusercontent.com/u/139908919?v=4"
                  alt="Abdisa Dev"
                  height={30}
                  style={{ borderRadius: "50%" }}
                />
              </Box>
              <Box>
                <Typography>{String(cell.getValue())!}</Typography>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          return (
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
              <Box>
                <FiberManualRecordIcon
                  color={
                    String(cell.getValue())!.toLowerCase() === "rented"
                      ? "error"
                      : "primary"
                  }
                  sx={{
                    border: `2px solid ${
                      String(cell.getValue())!.toLowerCase() === "rented"
                        ? "#D32F2F"
                        : "#1976D2"
                    }`,
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Box>
                <Typography>{String(cell.getValue())!}</Typography>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: "price",
        header: "Price",
      },
    ],
    []
  );

  return (
    <Box
      sx={{ height: "87vh", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ height: "100%" }}>
        <Statistics />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          ml: "20px",
        }}
      >
        <Box>
          <Table
            columns={columns}
            data={data}
            title="Live Book Status"
            pageSize={5}
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
