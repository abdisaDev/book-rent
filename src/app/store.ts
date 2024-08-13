import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menus/menuSlice";

export const store = configureStore({
  reducer: {
    menusDetail: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
