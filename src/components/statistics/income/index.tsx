import { Box, Chip, Divider, Paper, Typography } from "@mui/material";

function IncomeStatstics() {
  return (
    <Box>
      <Box sx={{ my: "20px" }}>
        <Paper
          sx={{
            boxShadow: "0 0 10px #E1D9D1A0",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: "20px",
              px: "20px",
              width: "100%",
            }}
          >
            <Typography fontWeight="bolder">Income</Typography>
            <Chip
              label="This Month"
              size="small"
              sx={{ borderRadius: "5px", backgroundColor: "#F4F5F7" }}
            />
          </Box>
          <Box sx={{ p: "10px" }}>
            <Divider />
          </Box>
          <Box
            sx={{
              px: "10px",
              py: "15px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="bolder" fontSize="25px">
              ETB 9460.00{" "}
            </Typography>
            <Box color="red">1.5 &darr;</Box>
          </Box>
          <Box sx={{ px: "10px", py: "15px" }}>
            <Typography variant="body2">
              Compared to ETB 9940 last month
            </Typography>
            <Typography variant="body2">
              Last Monty income ETB 25658.00
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
export default IncomeStatstics;
