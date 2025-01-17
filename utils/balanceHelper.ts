import { ethers } from "ethers";
import lpTokenAbi from "@/configs/abis/lpToken.json";
import erc20ABI from "@/configs/abis/erc20.json";
import { toReadableAmount } from "./customHelpers";
import { NATIVE_COIN_SYMBOL } from "@/configs";

export async function getBalance(address: string, token: any, provider: ethers.providers.Provider) {
  if (!token || !address || !provider) return;
  try {
    if (token.lpSymbol === NATIVE_COIN_SYMBOL) {
      const balance = await provider?.getBalance(address);
      return toReadableAmount(balance, 18);
    } else {
      if (token.isTokenOnly) {
        const contract = new ethers.Contract(
          token.lpAddresses,
          erc20ABI,
          provider
        );
        const balance = await contract.balanceOf(address);
        return toReadableAmount(balance, token.decimals);
      } else {
        const contract = new ethers.Contract(
          token.lpAddresses,
          lpTokenAbi,
          provider
        );
        const balance = await contract.balanceOf(address);
        const decimals = await contract.decimals();
        return toReadableAmount(balance, Number(decimals.toString()));
      }
    }
  } catch (e) {
    console.log(e);
  }
}
