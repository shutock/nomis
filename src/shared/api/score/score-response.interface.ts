export interface ScoreResponse {
  data: IData;
  messages: string[];
  succeeded: boolean;
}

export interface IData {
  address: string;
  score: number;
  stats: IStats;
}

export interface IStats {
  noData: boolean;
  deployedContracts: number;
  balance: number;
  balanceUSD: number;
  walletAge: number;
  totalTransactions: number;
  totalRejectedTransactions: number;
  averageTransactionTime: number;
  maxTransactionTime: number;
  minTransactionTime: number;
  walletTurnover: number;
  turnoverIntervals: ITurnoverInterval[];
  balanceChangeInLastMonth: number;
  balanceChangeInLastYear: number;
  nftHolding: number;
  timeFromLastTransaction: number;
  nftTrading: number;
  nftWorth: number;
  lastMonthTransactions: number;
  lastYearTransactions: number;
  transactionsPerMonth: number;
  tokensHolding: number;
  snapshotVotes: any[];
  snapshotProposals: any[];
  hapiRiskScore: any;
  statsDescriptions: IStatsDescriptions;
}

export interface ITurnoverInterval {
  startDate: string;
  endDate: string;
  amountSumValue: number;
  amountOutSumValue: number;
  amountInSumValue: number;
  count: number;
}

export interface IStatsDescriptions {
  DeployedContracts: IDeployedContracts;
  Balance: IBalance;
  BalanceUSD: IBalanceUsd;
  WalletAge: IWalletAge;
  TotalTransactions: ITotalTransactions;
  TotalRejectedTransactions: ITotalRejectedTransactions;
  AverageTransactionTime: IAverageTransactionTime;
  MaxTransactionTime: IMaxTransactionTime;
  MinTransactionTime: IMinTransactionTime;
  WalletTurnover: IWalletTurnover;
  BalanceChangeInLastMonth: IBalanceChangeInLastMonth;
  BalanceChangeInLastYear: IBalanceChangeInLastYear;
  NftHolding: INftHolding;
  TimeFromLastTransaction: ITimeFromLastTransaction;
  NftTrading: INftTrading;
  NftWorth: INftWorth;
  LastMonthTransactions: ILastMonthTransactions;
  LastYearTransactions: ILastYearTransactions;
  TransactionsPerMonth: ITransactionsPerMonth;
  TokensHolding: ITokensHolding;
}

export interface IDeployedContracts {
  label: string;
  description: string;
  units: string;
}

export interface IBalance {
  label: string;
  description: string;
  units: string;
}

export interface IBalanceUsd {
  label: string;
  description: string;
  units: string;
}

export interface IWalletAge {
  label: string;
  description: string;
  units: string;
}

export interface ITotalTransactions {
  label: string;
  description: string;
  units: string;
}

export interface ITotalRejectedTransactions {
  label: string;
  description: string;
  units: string;
}

export interface IAverageTransactionTime {
  label: string;
  description: string;
  units: string;
}

export interface IMaxTransactionTime {
  label: string;
  description: string;
  units: string;
}

export interface IMinTransactionTime {
  label: string;
  description: string;
  units: string;
}

export interface IWalletTurnover {
  label: string;
  description: string;
  units: string;
}

export interface IBalanceChangeInLastMonth {
  label: string;
  description: string;
  units: string;
}

export interface IBalanceChangeInLastYear {
  label: string;
  description: string;
  units: string;
}

export interface INftHolding {
  label: string;
  description: string;
  units: string;
}

export interface ITimeFromLastTransaction {
  label: string;
  description: string;
  units: string;
}

export interface INftTrading {
  label: string;
  description: string;
  units: string;
}

export interface INftWorth {
  label: string;
  description: string;
  units: string;
}

export interface ILastMonthTransactions {
  label: string;
  description: string;
  units: string;
}

export interface ILastYearTransactions {
  label: string;
  description: string;
  units: string;
}

export interface ITransactionsPerMonth {
  label: string;
  description: string;
  units: string;
}

export interface ITokensHolding {
  label: string;
  description: string;
  units: string;
}
