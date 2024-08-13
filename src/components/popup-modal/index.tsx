import { Box, Dialog, DialogContent, TextField } from "@mui/material";

function PopupModal() {
  return (
    <Box>
      <Dialog open={false}>
        <DialogContent>
          <Box>
            <Box>
              <TextField variant="outlined" label="Name" fullWidth />
            </Box>
            <Box>
              <TextField variant="outlined" label="Email Address" fullWidth />
            </Box>
            <Box>
              <TextField variant="outlined" label="Location" fullWidth />
            </Box>
            <Box>
              <TextField variant="outlined" label="Phone Number" fullWidth />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default PopupModal;
