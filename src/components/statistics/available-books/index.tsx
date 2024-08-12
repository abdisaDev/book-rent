import { Box, Chip, Paper, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 10, label: "Fiction", color: "green" },
  { id: 1, value: 15, label: "Self Help", color: "blue" },
  { id: 2, value: 20, label: "Business", color: "red" },
];

function Legend() {
  return (
    <Box display="flex" flexDirection="column" ml={3}>
      {data.map((item, index) => (
        <Box key={index} display="flex" alignItems="center" mb={1} pr={7}>
          <Box
            component="span"
            sx={{
              width: 15,
              height: 15,
              backgroundColor: item.color,
              borderRadius: "80%",
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              columnGap: 8,
              flex: 1,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">{item.label}</Typography>
            </Box>
            <Box>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function AvailableBooksStatstics() {
  return (
    <Box>
      <Paper
        sx={{
          boxShadow: "0 0 10px #E1D9D1A0",
          borderRadius: "10px",
          height: "360px",
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
          <Typography fontWeight="bolder">Available Books</Typography>
          <Chip
            label="Today"
            size="small"
            sx={{ borderRadius: "5px", backgroundColor: "#F4F5F7" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <PieChart
              title="Available Books"
              series={[
                {
                  data,
                  startAngle: 0,
                  endAngle: 360,
                  innerRadius: 65,
                  outerRadius: 45,
                  cx: 120,
                  cy: 90,
                },
              ]}
              slotProps={{
                legend: { hidden: true },
              }}
              width={260}
              height={200}
            />
          </Box>
          <Box>
            <Legend />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default AvailableBooksStatstics;
