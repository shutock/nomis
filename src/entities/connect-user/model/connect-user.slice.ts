import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IConnectUser,
  IConnectUserWallet,
  IConnectConnection,
} from "./connect-user.interface";
import { RootState } from "@app/store";
import { IData } from "@shared/api";

const reducerPath = "connectUser";
const initialUserState: IConnectUser = {
  connection: {
    type: undefined,
    connected: false,
  },
  wallet: {
    address: undefined,
    blockchain: undefined,
    name: undefined,
    avatar: undefined,
  },
  score: undefined,
  stats: undefined,
};

export const connectUserSlice = createSlice({
  name: reducerPath,

  initialState: () => {
    return initialUserState;
  },

  reducers: {
    connectSetWallet: (state, action: PayloadAction<IConnectUserWallet>) => {
      state.wallet = action.payload;
    },
    connectSetConnection: (
      state,
      action: PayloadAction<IConnectConnection>
    ) => {
      state.connection = action.payload;
    },
    connectSetScore: (state, action: PayloadAction<IData>) => {
      state.score = Math.round(350 + action.payload.score * 450);
    },
    connectSetStats: (state, action: PayloadAction<IData>) => {
      state.stats = action.payload.stats;
    },
    connectSetReset: (state) => (state = initialUserState),
  },
});

export const {
  connectSetWallet,
  connectSetConnection,
  connectSetStats,
  connectSetScore,
  connectSetReset,
} = connectUserSlice.actions;

export const connectUserReducer = connectUserSlice.reducer;
export const connectUserSelector = (state: RootState) => state.connectUser;
