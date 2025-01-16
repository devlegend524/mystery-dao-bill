import { useMemo } from "react";
import { useEthersSigner } from "./useEthers";
import {
  getErc20Contract,
  getZapContract,
} from "../utils/contractHelpers";
import { Address } from "viem";
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