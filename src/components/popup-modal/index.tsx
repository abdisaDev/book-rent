import { Box, Dialog, DialogContent, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  modalSelector,
  setIsOpenStatus,
} from "../../features/modal/modalSlice";
import { clickedRowSelector } from "../../features/clickedRow/clickedRowSlice";

function PopupModal() {
  const clickedRow = useAppSelector(clickedRowSelector);
  const isOpenSelector = useAppSelector(modalSelector);
  const dispatch = useAppDispatch();
  console.log(clickedRow);
  const handleOnClose = (event, reason) => {
    if (reason === "backdropClick") {
      dispatch(setIsOpenStatus(false));
    }
  };
  return (
    <Box>
      <Dialog open={isOpenSelector.isOpen} onClose={handleOnClose}>
        <DialogContent
          sx={{
            width: "500px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              px: 2,
            }}
          >
            <Box>
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                disabled
                value={clickedRow.row.name}
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                label="Email Address"
                fullWidth
                disabled
                value={clickedRow.row.email}
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                label="Location"
                fullWidth
                disabled
                value={clickedRow.row.location}
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                label="Phone Number"
                fullWidth
                disabled
                value={clickedRow.row.phone_number}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default PopupModal;
