import "../styles/globals.css";

import type { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme as extendedTheme } from "../src/shared";

import { Provider } from "react-redux";
import { store } from "../src/app";

import { createClient, configureChains, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const App = ({ Component, pageProps }: AppProps) => {
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()]
  );

  const theme = extendTheme(extendedTheme);

  const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
    connectors: [
      new InjectedConnector({ chains, options: { name: "Extension" } }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "Nomis",
          reloadOnDisconnect: false,
          darkMode: true,
        },
      }),
      new LedgerConnector({ chains }),
      new MetaMaskConnector({ chains }),
    ],
  });

  return (
    <WagmiConfig client={client}>
      <Provider store={store}>
        <ChakraProvider theme={theme} cssVarsRoot="nomis" resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </WagmiConfig>
  );
};

export default App;
