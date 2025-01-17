import { useMemo } from "react";
import { useEthersSigner, useEthersProvider } from "./useEthers";
import {
  getErc20Contract,
  getZapContract,
  getNFTContract
} from "@/utils/contractHelpers";
import { Address } from "viem";
import { useAccount } from "wagmi";
import { CHAIN_ID } from "@/configs";

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: Address) => {
  const signer = useEthersSigner();
  return useMemo(() => getErc20Contract(address, signer), [address, signer]);
};

export const useZapContract = () => {
  const signer = useEthersSigner();
  return useMemo(
    () =>  getZapContract(signer),
    [signer]
  );
};

export const useNFTContract = () => {
    const signer = useEthersSigner();
    const provider = useEthersProvider();
    const { chain } = useAccount();
    return useMemo(
      () =>
        chain &&
        chain.id === CHAIN_ID &&
        getNFTContract(provider),
      [signer, chain]
    );
  };
  