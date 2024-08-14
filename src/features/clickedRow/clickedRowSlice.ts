import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { PayloadAction, Slice } from '@reduxjs/toolkit';

interface ClickedRowType {
  row: object;
}

const initialState: ClickedRowType = {
  row: {},
};

export const clickedRowSlice: Slice<object> = createSlice({
  name: 'menulist',
  initialState,
  reducers: {
    setClickedRow: (state, action: PayloadAction<object>) => {
      state.row = action.payload;
    },
  },
});

export const { setClickedRow } = clickedRowSlice.actions;

export const clickedRowSelector = (state: RootState) => state.clickedRow;

export default clickedRowSlice.reducer;
