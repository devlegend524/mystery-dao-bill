import { Contract, ethers } from "ethers";

import {
  didUserReject,
} from "./customHelpers";
import { notify } from "./toastHelper";

export const zap = async (
  zapContract: Contract,
  tokenA: string,
  isNative: boolean,
  amount: number,
  tokenB: string,
  isNativeOut: boolean,
  address: string
) => {
  try {
    if (isNative) {
      const tx = await zapContract.zapETH(tokenB, {
        from: address,
        value: amount,
      });
      await tx.wait();
      notify("success", "Zap successful!");
    } else {
      const tx = await zapContract.zap(tokenA, amount, tokenB, isNativeOut, {
        from: address,
      });
      await tx.wait();
      notify("success", "Zap successful!");
    }
  } catch (e) {
    if (didUserReject(e)) {
      notify("error", "User rejected transaction");
    } else {
      notify("error", "Zap Error!!!");
      console.log(e);
    }
    return null;
  }
};

