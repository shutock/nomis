import { IStats } from "@shared/api/";
import { Chain as IConnectBlockchain } from "wagmi";

export interface IConnectUser {
  connection: IConnectConnection;
  wallet: IConnectUserWallet | undefined;
  score: number | undefined;
  stats: IStats | undefined;
}

export interface IConnectUserWallet {
  address: string | `0x${string}` | undefined;
  blockchain: IConnectBlockchain | undefined;
  name: string | undefined;
  avatar: string | undefined;
}

export interface IConnectConnection {
  type: "evm" | "xumm" | "unstoppabledomains" | undefined;
  connected: boolean;
}
