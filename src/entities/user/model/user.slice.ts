import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../app";
import { ISearchUserState, ISearchUserWallet } from "./user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const reducerPath = "searchUser";
const initialUserState: ISearchUserState = {
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
    setWallet: (state, action: PayloadAction<ISearchUserWallet>) => {
      state.wallet = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setStats: (state, action: PayloadAction<ISearchUserState>) => {
      state.stats = action.payload.stats;
    },
    setReset: (state) => (state = initialUserState),
  },
});

export const { setWallet, setStats, setScore, setReset } =
  searchUserSlice.actions;

export default searchUserSlice.reducer;

export const searchUser = (state: RootState) => state.searchUser;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
