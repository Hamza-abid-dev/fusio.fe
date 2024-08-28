import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/Common";
import reportWebVitals from "./reportWebVitals.ts";

import { InjectedConnector } from "@wagmi/core";
import { walletConnectProvider } from "@web3modal/wagmi";
import { EIP6963Connector, createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

const projectId = "c7294528fe5225f2be22ac7dd13eee59";
const { chains, publicClient } = configureChains([bsc], [walletConnectProvider({ projectId }), publicProvider()]);

const metadata = {
	name: "BlockGuard Dapp",
	description: "BlockGuard Dapp with Web3Modal v3 + Wagmi",
	url: "https://qa-wm.blockguard.org",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [
		new WalletConnectConnector({
			chains,
			options: { projectId, showQrModal: false, metadata },
		}),
		new EIP6963Connector({ chains }) as never,
		new InjectedConnector({ chains, options: { shimDisconnect: true } }),
		new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } }),
	],
	publicClient,
});

createWeb3Modal({
	wagmiConfig,
	projectId,
	chains,
	defaultChain: chains[0],

	themeVariables: {
		"--w3m-color-mix": "#051b37",
		"--w3m-color-mix-strength": 10,
		"--w3m-font-family": '"Open Sans", sans-serif',
		"--w3m-border-radius-master": "2px",
		"--w3m-font-size-master": "14px",
	},
}) as unknown;

const STRIPE_KEY: string = import.meta.env.VITE_STRIPE_KEY as string;
const stripePromise = loadStripe(STRIPE_KEY);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WagmiConfig config={wagmiConfig}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Elements stripe={stripePromise}>
						<Router>
							<ErrorBoundary>
								<App />
							</ErrorBoundary>
						</Router>
					</Elements>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</Provider>
		</WagmiConfig>
	</StrictMode>,
);

reportWebVitals();
serviceWorker.unregister();
