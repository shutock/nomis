import { IStats } from "./../../../shared/api/nomis/scoreResponse.interface";

export interface userState {
  wallet: {
    address: string | null;
    blockchain: string | null;
    name: string | null;
    avatar: string | null;
  };
  score: number | null;
  stats: IStats | null;
}

export const initialUserState: userState = {
  wallet: {
    address: null,
    blockchain: null,
    name: null,
    avatar: null,
  },
  score: null,
  stats: null,
};
