import { useQuery, useMutation } from "@tanstack/react-query";
import useFetchUser from "../../hooks/fetchUser";
import { Box, Button, Chip, IconButton, Switch } from "@mui/material";
import Table from "../../components/table";
import { useMemo } from "react";
import { MRT_ColumnDef } from "material-react-table";
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  useUpdateOwnersApproval,
  useUpdateOwnersStatus,
} from "../../hooks/updateOwnerStatus";
import { useAppDispatch } from "../../app/hooks";
import { setIsOpenStatus } from "../../features/modal/modalSlice";
import { setClickedRow } from "../../features/clickedRow/clickedRowSlice";
import UserDataDisplay from "../../components/popup-modal/user-data";

function Owners() {
  const updateOwnerStatus = useUpdateOwnersStatus;
  const updateOwnerApproval = useUpdateOwnersApproval;

  const dispatch = useAppDispatch();

  const { data, isSuccess, refetch, isLoading } = useQuery({
    queryKey: ["fetch-owners"],
    queryFn: useFetchUser,
  });

  const updateStatusMutation = useMutation({
    mutationFn: (userEmail: { email: string }) => {
      return updateOwnerStatus(userEmail);
    },
  });

  const updateApprovalMutation = useMutation({
    mutationFn: (userEmail: { email: string }) => {
      return updateOwnerApproval(userEmail);
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Owner",
      },
      {
        accessorKey: "books",
        header: "Upload",
      },
      {
        accessorKey: "location",
        header: "Location",
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
                      onClick={() => {
                        updateStatusMutation.mutate({
                          email: cell.row.original.email,
                        });
                        isSuccess && refetch();
                      }}
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
      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ cell }) => (
          <>
            <IconButton
              onClick={() => {
                dispatch(setIsOpenStatus(true));
                dispatch(setClickedRow(cell.row.original));
              }}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </>
        ),
      },
      {
        accessorKey: "isOwnerApproved",
        header: "",
        Cell: ({ cell }) => (
          <>
            <Chip
              label={
                <Button
                  sx={{ color: "#FFF" }}
                  onClick={() => {
                    updateApprovalMutation.mutate({
                      email: cell.row.original.email,
                    });
                    refetch();
                  }}
                >
                  {cell.getValue() ? "Approved" : "Approve"}
                </Button>
              }
              size="small"
              sx={{
                backgroundColor: cell.getValue() ? "#00ABFF" : "#AFAFAF",
                borderRadius: "5px",
              }}
            />
          </>
        ),
      },
    ],
    []
  );

  const customizedData =
    isSuccess &&
    data.data.map(({ books, ...user }) => {
      let totalQuantity = 0;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      books.map((book: { quantity: any }) => {
        const { quantity } = book;
        totalQuantity += quantity;
      });
      return { books: `${totalQuantity} Books`, ...user };
    });

  return (
    <Box>
      <UserDataDisplay />
      <Table
        columns={columns}
        data={isSuccess ? customizedData : []}
        title="List Of Owners"
        pageSize={10}
        isLoading={isLoading}
      />
    </Box>
  );
}

export default Owners;
