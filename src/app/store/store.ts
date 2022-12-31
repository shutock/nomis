import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { scoreApi } from "../../shared/api";
import { searchUserReducer } from "@entities/search-user";
import { connectUserReducer } from "@entities/connect-user";

export const store = configureStore({
  reducer: {
    [scoreApi.reducerPath]: scoreApi.reducer,
    searchUser: searchUserReducer,
    connectUser: connectUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoreApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
