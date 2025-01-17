import contractAddresses from "../constants/addresses";
import {ethers} from 'ethers'

export const getZapAddress = () : string => {
    return ethers.utils.getAddress(contractAddresses.zap) ;
  };
  export const getNFTAddress = () : string => {
    return ethers.utils.getAddress(contractAddresses.nft) ;
  };