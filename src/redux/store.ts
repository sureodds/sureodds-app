import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { userApi } from "./services/userApi";
import toggleSlice from "./features/toggleSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    toggle: toggleSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
