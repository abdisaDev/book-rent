import { Box, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { menuSelector } from "../../features/menus/menuSlice";

function AppBar() {
  const menuList = useAppSelector(menuSelector);
  return (
    <Box>
      <Paper
        sx={{
          borderRadius: "20px",
          p: "25px 50px",
          width: "-webkit-fill-available",
        }}
        elevation={0}
      >
        <Typography>
          <span style={{ fontWeight: "bolder" }}>
            {JSON.parse(localStorage.getItem("user")!).role.toLowerCase() !==
            "owner"
              ? "Admin"
              : "Owner"}
          </span>
          /{menuList.title}
        </Typography>
      </Paper>
    </Box>
  );
}

export default AppBar;
