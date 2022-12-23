import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { scoreApi } from "../../shared/api";
import searchUserReducer from "../../entities/user/model/user.slice";

export const store = configureStore({
  reducer: {
    [scoreApi.reducerPath]: scoreApi.reducer,
    searchUser: searchUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoreApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
