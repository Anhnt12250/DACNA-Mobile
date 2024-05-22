import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./user/UserSlice";
import AuthReducer from "./auth/AuthSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
