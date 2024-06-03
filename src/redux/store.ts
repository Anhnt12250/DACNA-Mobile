import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./user/UserSlice";
import AuthReducer from "./auth/AuthSlice";
import GroupReducer from "./group/GroupSlice";

//Workday
import WorkdayReducer from "./workday/WorkdaySlice";
import CheckInReducer from "./workday/CheckInSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    auth: AuthReducer,
    group: GroupReducer,
    workday: WorkdayReducer,
    checkin: CheckInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
