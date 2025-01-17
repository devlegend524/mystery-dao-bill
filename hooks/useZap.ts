import { useCallback } from "react";
import { zap } from "@/utils/callHelpers";
import { useZapContract } from "./useContract";
import { useAccount } from "wagmi";

const useZap = () => {
  const { address } = useAccount();
  const zapContract = useZapContract();

  const handleZap = useCallback(
    async (tokenA, isNative, amount, tokenB, isNativeOut) => {
      await zap(
        zapContract,
        tokenA,
        isNative,
        amount,
        tokenB,
        isNativeOut,
        address
      );
    },
    [address, zapContract]
  );

  return { onZap: handleZap };
};

export default useZap;
