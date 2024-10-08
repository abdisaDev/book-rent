import { Box, Button, Paper, Typography } from "@mui/material";
import {
  MenuBook as MenuBookIcon,
  Menu as MenuIcon,
  LogoutRounded as LogoutRoundedIcon,
} from "@mui/icons-material";
import SideBarMenu from "./menu";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        width: "300px",
      }}
    >
      <Paper
        sx={{
          height: "inherit",
          backgroundColor: "#171B36",
          borderRadius: "20px",
          p: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              pb: "3rem",
            }}
          >
            <MenuIcon sx={{ color: "#eee" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <MenuBookIcon sx={{ color: "#01A2F1" }} fontSize="large" />
              </Box>
              <Box pl={1}>
                <Typography variant="h5" color="#01A2F1">
                  Book Rent
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <SideBarMenu />
          </Box>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Button
            fullWidth
            sx={{
              p: "10px",
              backgroundColor: "#45495E",
              color: "#eee",
              "&:hover": { backgroundColor: "#45495E" },
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/auth/login");
            }}
          >
            <LogoutRoundedIcon />
            Logout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default SideBar;
