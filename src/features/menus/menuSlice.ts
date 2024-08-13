import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface MenuList {
  title: string;
}

// Define the initial state using that type
const initialState: MenuList = {
  title: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.title;

export default menuSlice.reducer;
