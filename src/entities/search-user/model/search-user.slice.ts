import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@app/store";
import { ISearchUser, ISearchUserWallet } from "./search-user.interface";
import { IData } from "@shared/api";

const reducerPath = "searchUser";
const initialUserState: ISearchUser = {
  wallet: {
    address: undefined,
    blockchain: undefined,
    name: undefined,
    avatar: undefined,
  },
  score: undefined,
  stats: undefined,
};

export const searchUserSlice = createSlice({
  name: reducerPath,

  initialState: () => {
    return initialUserState;
  },

  reducers: {
    searchSetWallet: (state, action: PayloadAction<ISearchUserWallet>) => {
      state.wallet = action.payload;
    },
    searchSetScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    searchSetStats: (state, action: PayloadAction<IData>) => {
      state.stats = action.payload.stats;
    },
    searchSetReset: (state) => (state = initialUserState),
  },
});

export const {
  searchSetWallet,
  searchSetStats,
  searchSetScore,
  searchSetReset,
} = searchUserSlice.actions;

export const searchUserReducer = searchUserSlice.reducer;
export const searchUserSelector = (state: RootState) => state.searchUser;
