import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

interface IsModalOpen {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: IsModalOpen = {
  isOpen: false,
};

export const modalSlice: Slice<IsModalOpen> = createSlice({
  name: "menulist",
  initialState,
  reducers: {
    setIsOpenStatus: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpenStatus } = modalSlice.actions;

export const modalSelector = (state: RootState) => state.modalHandler;

export default modalSlice.reducer;
