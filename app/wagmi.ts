import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  pulsechain,
  avalanche,
  bsc,
  base,
  sonic,
  mainnet,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "BiLL Mystery DAO",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    pulsechain,
    avalanche,
    bsc,
    base,
    sonic,
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
