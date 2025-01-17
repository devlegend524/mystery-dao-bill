import { ContractInterface, ethers } from "ethers";
// Addresses
import {
  getZapAddress,
  getNFTAddress
} from "./addressHelpers";

// ABI
import erc20Abi from "../configs/abis/erc20.json";
import lpTokenAbi from "../configs/abis/lpToken.json";
import zapABI from "../configs/abis/zap.json";
import nftAbi from '../configs/abis/nft.json'

import { DEFAULT_GAS_PRICE } from "../configs";
import {  Address } from "viem";
// import { getSettings, getGasPriceInWei } from './settings'
export const getAllowance = async (
    address,
    token,
    router_address,
    provider
  ) => {
    if (address && token && provider) {
      try {
        if (token.isTokenOnly) {
          const contract = new ethers.Contract(
            token.lpAddresses,
            erc20Abi,
            provider
          );
          const amount = (
            await contract.allowance(address, router_address)
          ).toString();
          return amount;
        } else {
          const contract = new ethers.Contract(
            token.lpAddresses,
            lpTokenAbi,
            provider
          );
          const amount = (
            await contract.allowance(address, router_address)
          ).toString();
          return amount;
        }
      } catch (e) {
        console.log(e);
        return 0;
      }
    }
  };
  
export const getDefaultGasPrice = () => {
  return DEFAULT_GAS_PRICE;
};

const getContract = (abi:ContractInterface, address:string, provider:ethers.providers.JsonRpcSigner | ethers.providers.JsonRpcProvider | ethers.providers.FallbackProvider | undefined) => {
  return new ethers.Contract(address, abi, provider);
};

export const getErc20Contract = (address: Address, provider: ethers.providers.JsonRpcSigner | undefined) => {
  return getContract(erc20Abi, address, provider);
};

export const getLpContract = (address:Address, provider: ethers.providers.JsonRpcSigner | undefined) => {
  return getContract(lpTokenAbi, address, provider);
};

export const getZapContract = (provider:ethers.providers.JsonRpcSigner | undefined) => {
  return getContract(zapABI, getZapAddress(), provider);
};

export const getNFTContract = (provider: ethers.providers.JsonRpcProvider | ethers.providers.FallbackProvider | undefined) => {
    return getContract(nftAbi, getNFTAddress(), provider);
  };
  