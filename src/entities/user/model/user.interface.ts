import { IStats } from "../../../shared/api/nomis/scoreResponse.interface";

export interface ISearchUserState {
  wallet: ISearchUserWallet;
  score: number | undefined;
  stats: IStats | undefined;
}

export interface ISearchUserWallet {
  address: string | undefined;
  blockchain: string | undefined;
  name: string | undefined;
  avatar: string | undefined;
}
