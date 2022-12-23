import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { scoreApi } from "../../src/shared/api/nomis/score.api";

export const store = configureStore({
  reducer: {
    [scoreApi.reducerPath]: scoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(scoreApi.middleware),
});

setupListeners(store.dispatch);
