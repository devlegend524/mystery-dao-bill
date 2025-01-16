import { ContractInterface, ethers } from "ethers";
// Addresses
import {
  getZapAddress,
} from "./addressHelpers";

// ABI
import erc20Abi from "../configs/abis/erc20.json";
import lpTokenAbi from "../configs/abis/lpToken.json";
import zapABI from "../configs/abis/zap.json";


import { DEFAULT_GAS_PRICE } from "../configs";
import {  Address } from "viem";
// import { getSettings, getGasPriceInWei } from './settings'

export const getDefaultGasPrice = () => {
  return DEFAULT_GAS_PRICE;
};

const getContract = (abi:ContractInterface, address:string, provider:ethers.providers.JsonRpcSigner | ethers.providers.JsonRpcProvider | undefined) => {
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

