import { Chain as IConnectBlockchain } from "wagmi";

export const connectBlockchainsList: IConnectBlockchain[] = [
  {
    id: 42161,
    network: "arbitrum",
    name: "Arbitrum One",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://rpc.ankr.com/arbitrum	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Arbitrum Explorer",
        url: "https://explorer.arbitrum.io",
      },
    },
  },
  {
    id: 56,
    network: "binance",
    name: "Binance",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://bsc-mainnet.public.blastapi.io	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Binance Blockchain Explorer",
        url: "https://bscscan.com",
      },
    },
  },
  {
    id: 42220,
    network: "celo",
    name: "Celo",
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://forno.celo.org	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Celo Explorer",
        url: "https://explorer.celo.org",
      },
    },
  },
  {
    id: 42220,
    network: "celo",
    name: "Celo",
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://forno.celo.org	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Celo Explorer",
        url: "https://explorer.celo.org",
      },
    },
  },
  {
    id: 1,
    network: "homestead",
    name: "Ethereum",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://cloudflare-eth.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://etherscan.io",
      },
    },
  },
  {
    id: 9001,
    network: "evmos",
    name: "Evmos",
    nativeCurrency: {
      name: "Evmos",
      symbol: "EVMOS",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://json-rpc.evmos.blockhunters.org	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Evmos Explorer",
        url: "https://escan.live",
      },
    },
  },
  {
    id: 9001,
    network: "evmos",
    name: "Evmos",
    nativeCurrency: {
      name: "Evmos",
      symbol: "EVMOS",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://json-rpc.evmos.blockhunters.org	"],
      },
    },
    blockExplorers: {
      default: {
        name: "Evmos Explorer",
        url: "https://escan.live",
      },
    },
  },
  {
    id: 8217,
    network: "klaytn",
    name: "Klaytn",
    nativeCurrency: {
      name: "Klay",
      symbol: "KLAY",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://public-node-api.klaytnapi.com/v1/cypress"],
      },
    },
    blockExplorers: {
      default: {
        name: "Klaytnscope",
        url: "https://scope.klaytn.com",
      },
    },
  },
  {
    id: 1284,
    network: "moonbeam",
    name: "Monnbeam",
    nativeCurrency: {
      name: "GLMR",
      symbol: "GLMR",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://rpc.ankr.com/moonbeam"],
      },
    },
    blockExplorers: {
      default: {
        name: "Moonbeam blockchain explorer",
        url: "https://moonscan.io",
      },
    },
  },
  {
    id: 137,
    network: "polygon",
    name: "Polygon",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://matic-mainnet.chainstacklabs.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "Polygonscan",
        url: "https://polygonscan.com",
      },
    },
  },
  {
    id: 137,
    network: "polygon",
    name: "Polygon",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://matic-mainnet.chainstacklabs.com"],
      },
    },
    blockExplorers: {
      default: {
        name: "Polygonscan",
        url: "https://polygonscan.com",
      },
    },
  },
  {
    id: 50,
    network: "XDC Network",
    name: "xdc",
    nativeCurrency: {
      name: "XDC",
      symbol: "XDC",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ["https://rpc1.xinfin.network"],
      },
    },
    blockExplorers: {
      default: {
        name: "XDC Explorer",
        url: "https://explorer.xinfin.network",
      },
    },
  },
];
