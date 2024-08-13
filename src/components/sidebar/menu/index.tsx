import { Box, Button } from "@mui/material";
import { menuLists } from "../../../menus/menusLists";
import { useState } from "react";
import { setTitle } from "../../../features/menus/menuSlice";

import { useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";

function SideBarMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
              navigate(
                `${
                  ["dashboard", "owners", "books"].find(
                    (path) => menuList.label.toLowerCase() === path
                  )
                    ? "/app/" + menuList.label.toLowerCase()
                    : ""
                }`
              );
              dispatch(setTitle(menuList.label));
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
              display:
                JSON.parse(localStorage.getItem("user")!).role.toLowerCase() ===
                  "owner" && menuList.label.toLowerCase() === "owners"
                  ? "none"
                  : "inherit",
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
