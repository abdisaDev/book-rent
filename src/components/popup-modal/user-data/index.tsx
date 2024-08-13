import { Box, TextField } from "@mui/material";
import PopupModal from "..";
import { useAppSelector } from "../../../app/hooks";
import { clickedRowSelector } from "../../../features/clickedRow/clickedRowSlice";

function UserDataDisplay() {
  const clickedRow = useAppSelector(clickedRowSelector);

  return (
    <PopupModal>
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
    </PopupModal>
  );
}

export default UserDataDisplay;
