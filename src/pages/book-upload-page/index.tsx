import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { HTMLAttributes, JSXElementConstructor } from "react";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

function PopperComponent(props?: {
  children: JSX.Element;
}): JSXElementConstructor<HTMLAttributes<HTMLElement>> | undefined {
  return (
    <Paper>
      <Box>{props?.children}</Box>
      <Box sx={{ py: "10px" }}>
        <Divider />
      </Box>
      <Box>
        <Button fullWidth>Add Book</Button>
      </Box>
    </Paper>
  );
}

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
              PaperComponent={PopperComponent}
              disableCloseOnSelect
              id="size-small-filled"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              defaultValue={top100Films[0]}
              sx={{ width: "300px", mb: 15 }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <PopperComponent>
                      <Chip
                        {...tagProps}
                        key={key}
                        variant="outlined"
                        label={option.title}
                        size="small"
                      />
                    </PopperComponent>
                  );
                })
              }
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
            />
          </Box>
          <Box sx={{ display: "flex", gap: 5, my: 2 }}>
            <Box>
              <TextField
                placeholder="Book Quantity"
                label="Book Quantity"
                type="number"
              />
            </Box>
            <Box>
              <TextField
                placeholder="Rent Price for 2 Weeks"
                label="Rent Price for 2 Weeks"
              />
            </Box>
          </Box>
          <Box sx={{ my: 2 }}>
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
