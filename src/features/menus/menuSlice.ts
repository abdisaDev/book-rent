import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

interface MenuList {
  title: string;
}

// Define the initial state using that type
const initialState: MenuList = {
  title: "DashBoard",
};

export const menuSlice: Slice<MenuList> = createSlice({
  name: "menulist",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = menuSlice.actions;

export const menuSelector = (state: RootState) => state.menusDetail;

export default menuSlice.reducer;
