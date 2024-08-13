import { Box, Button } from "@mui/material";
import { menuLists } from "../../../menus/menusLists";
import { useState } from "react";

function SideBarMenu() {
  const [clickedMenu, setClickedMenu] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: "10px",
      }}
    >
      {menuLists.map((menuList, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setClickedMenu(menuList.index);
            }}
            sx={{
              my: "10px",
              p: "10px",
              justifyContent: "flex-start",
              columnGap: "10px",
              backgroundColor: clickedMenu === index ? "#00ABFF" : "",
              color: "#eee",
              "&:hover": {
                backgroundColor:
                  clickedMenu !== index ? "#00ABFF6B" : "#00ABFF",
              },
              mb: menuList.end ? "40px" : "0",
            }}
          >
            <menuList.icon /> {menuList.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default SideBarMenu;
