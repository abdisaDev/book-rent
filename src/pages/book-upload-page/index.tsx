import {
  Autocomplete,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
function BookUploadPage() {
  return (
    <Box>
      <Paper sx={{ width: "100%", height: "87vh", borderRadius: "15px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 6,
            gap: 2,
          }}
        >
          <Box>
            <Typography>Upload New Book</Typography>
          </Box>

          <Box>
            <Autocomplete
              id="size-small-filled"
              options={[]}
              getOptionLabel={(option) => option.title}
              defaultValue={[]}
              renderInput={(params) => (
                <Box>
                  <TextField
                    {...params}
                    variant="filled"
                    label="Search Book by name or author"
                    fullWidth
                  />
                </Box>
              )}
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Box>
              <TextField />
            </Box>
            <Box>
              <TextField placeholder="Rent Price for 2 Weeks" />
            </Box>
          </Box>
          <Box>
            <Button>
              <UploadIcon /> &ensp; Upload Book Cover
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ p: "20px 100px", borderRadius: "20px" }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default BookUploadPage;
