import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menus/menuSlice";
import modalReducer from "../features/modal/modalSlice";
import clickedRowReducer from "../features/clickedRow/clickedRowSlice";

export const store = configureStore({
  reducer: {
    menusDetail: menuReducer,
    modalHandler: modalReducer,
    clickedRow: clickedRowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
