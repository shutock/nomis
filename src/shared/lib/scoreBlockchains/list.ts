interface IScoreBlockchain {
  label: string;
  apiSlug: string;
  group: string;
  nativeCurrency: string;
  addressStartWith: string | null;
  evm: boolean;
}

export const list: IScoreBlockchain[] = [
  {
    label: "Aeternity",
    apiSlug: "aeternity",
    group: "finance",
    nativeCurrency: "ETH",
    addressStartWith: "ak_",
    evm: false,
  },
  {
    label: "Aptos",
    apiSlug: "aptos",
    group: "finance",
    nativeCurrency: "APTOS",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Arbitrum One",
    apiSlug: "arbitrumone",
    group: "finance",
    nativeCurrency: "ETH",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Binance",
    apiSlug: "bsc",
    group: "finance",
    nativeCurrency: "BNB",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Celo",
    apiSlug: "celo",
    group: "finance",
    nativeCurrency: "CELO",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Cube",
    apiSlug: "cube",
    group: "finance",
    nativeCurrency: "CUBE",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Ethereum",
    apiSlug: "ethereum",
    group: "finance",
    nativeCurrency: "ETH",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Evmos",
    apiSlug: "evmos",
    group: "finance",
    nativeCurrency: "EVMOS",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Hedera",
    apiSlug: "hedera",
    group: "finance",
    nativeCurrency: "HBAR",
    addressStartWith: null,
    evm: false,
  },
  {
    label: "Klaytn",
    apiSlug: "klaytn",
    group: "finance",
    nativeCurrency: "KLAY",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Moonbeam",
    apiSlug: "moonbeam",
    group: "finance",
    nativeCurrency: "GLMR",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Polygon",
    apiSlug: "polygon",
    group: "finance",
    nativeCurrency: "MATIC",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Polygon",
    apiSlug: "polygon",
    group: "eco",
    nativeCurrency: "MATIC",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Ripple",
    apiSlug: "ripple",
    group: "finance",
    nativeCurrency: "XRP",
    addressStartWith: "r",
    evm: false,
  },
  {
    label: "Solana",
    apiSlug: "solana",
    group: "finance",
    nativeCurrency: "SOL",
    addressStartWith: null,
    evm: false,
  },
  {
    label: "TRON",
    apiSlug: "tron",
    group: "finance",
    nativeCurrency: "TRX",
    addressStartWith: null,
    evm: false,
  },
  {
    label: "Trust EVM",
    apiSlug: "trustevm",
    group: "finance",
    nativeCurrency: "ETH",
    addressStartWith: "0x",
    evm: true,
  },
  {
    label: "Waves",
    apiSlug: "waves",
    group: "finance",
    nativeCurrency: "WAVES",
    addressStartWith: null,
    evm: false,
  },
  {
    label: "XDC Network",
    apiSlug: "xdc",
    group: "finance",
    nativeCurrency: "XDC",
    addressStartWith: "0x",
    evm: true,
  },
];
