import { IScoreBlockchain } from "@shared/lib";
import { IStats } from "@shared/api";

export interface ISearchUser {
  wallet: ISearchUserWallet;
  score: number | undefined;
  stats: IStats | undefined;
}

export interface ISearchUserWallet {
  address: string | undefined;
  blockchain: IScoreBlockchain | undefined;
  name: string | undefined;
  avatar: string | undefined;
}
