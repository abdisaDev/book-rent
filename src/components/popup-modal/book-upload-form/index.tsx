import { Box, TextField } from "@mui/material";
import PopupModal from "..";

function BookUploadForm() {
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
        {/* <Box>
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
        </Box> */}
        dads
      </Box>
    </PopupModal>
  );
}

export default BookUploadForm;
