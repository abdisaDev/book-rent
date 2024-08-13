import { Box, Divider, Typography } from "@mui/material";
import Logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#171B36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <img
            src={Logo}
            alt="Book Rent Logo"
            color="#eee"
            width={500}
            height={300}
          />
        </Box>
      </Box>

      <Box sx={{ width: "50%", px: 12 }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
            <Box>
              <img
                src={Logo}
                alt="Book Rent Logo"
                color="#60cbff"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Typography variant="h5">Book Rent</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              mb: 4,
              rowGap: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">
              {location.pathname === "/auth/login"
                ? "Login"
                : "Sign Up as Owner"}
            </Typography>
            <Divider />
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
