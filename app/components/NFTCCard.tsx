import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { toReadableAmount, didUserReject } from "../utils/customHelpers";
import { useNFTContract, useERC20 } from "../hooks/useContract";
import LogoLoading from "../components/LogoLoading";
import { notify } from "../utils/toastHelper";
import { FaCheck } from "react-icons/fa";
import { getNFTContract } from "../utils/contractHelpers";
import httpProvider from "../utils/providerHelpers";

export default function NFTCard({ tokenId, active, myNFTID }) {
  const myNFTContract = getNFTContract(httpProvider);

  const nftContract = useNFTContract();
  const { address } = useAccount();

  const [pendingTx, setPendingTx] = useState(false);
  const [delay, setDelay] = useState(true);
  const [isSold, setIsSold] = useState(false);
  const [nftPrice, setNFTPrice] = useState("");
  const [paused, setPaused] = useState(false);

  const handleBuyNFT = async () => {
    if (!nftPrice) {
      return;
    }

    if (paused) {
      notify("error", "Presale is not started yet");
      return;
    }

    try {
      setPendingTx(true);
      const tx = await nftContract.buyNFT(tokenId);
      await tx.wait();
      setPendingTx(false);
      notify("success", `You bought SNOW NFT successfully`);
      checkIsSold();
    } catch (error) {
      setPendingTx(false);
      if (didUserReject(error)) {
        notify("warning", "User Rejected transaction");
        return;
      } else {
        notify("warning", error.reason);
        return;
      }
    }
  };

  const handleImageError = (event) => {
    event.target.src = "/images/logos/usdcLock.png";
  };

  const checkIsSold = async (tokenId) => {
    // if (address) {
    //   const isSold = await nftContract.minted(tokenId);
    //   if (isSold) {
    //     setIsSold(true);
    //   } else {
    //     setIsSold(false);
    //   }
    // } else {
    //   setIsSold(false);
    // }
  };

  useEffect(() => {
    async function fetchNFTs() {
      try {
        let nftPrice = await myNFTContract.NFTPrice();
        let paused = await myNFTContract.paused();
        setNFTPrice(nftPrice);
        setPaused(paused);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNFTs();
  }, []);

  useEffect(() => {
    checkIsSold(tokenId);
    setTimeout(() => {
      setDelay(false);
    }, 1000);
  }, [tokenId]);

  if (active) {
    return (
      <>
        <div
          key={tokenId}
          className={`w-full sm:min-h-[337px] min-h-[250px] sm:p-6 p-2 rounded-lg activeBg  flex flex-col justify-between`}
        >
          <div>
            {delay ? (
              <div className="mx-auto h-[177px] sm:h-[190px] w-full bg-white/5 rounded-md animate-pulse"></div>
            ) : (
              <img
                key={tokenId}
                src={`https://snowbank.io/NFTs/sn${tokenId}.png`}
                onError={handleImageError}
                alt="NFT"
                className="w-full border-opacity-30 h-[177px] sm:h-[190px] object-cover"
              />
            )}
          </div>

          <div>
            <div className="flex justify-between px-2">
              <p>NFT ID: </p>
              <p>{tokenId}</p>
            </div>
            <div className="flex justify-between px-2">
              <p>Price: </p>
              <p>{toReadableAmount(nftPrice)} DAI</p>
            </div>
            {isSold ? (
              <button
                key={tokenId}
                disabled={true}
                className="main_btn mx-auto mt-4 py-[9px!important] opacity-50 text-green-400 flex items-center"
              >
                <FaCheck className="text-green-400 text-xl mr-1 my-auto mt-1" />{" "}
                Sold
              </button>
            ) : (
              <button
                key={tokenId}
                onClick={handleBuyNFT}
                className="main_btn mx-auto mt-4 py-[9px!important]"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
        {pendingTx && <LogoLoading />}
      </>
    );
  } else {
    return (
      <div
        className={`w-full max-w-[400px] min-h-[227px] mx-auto my-3 p-6 rounded-lg snow_effect flex flex-col justify-between`}
      >
        <div>
          {delay ? (
            <div className="mx-auto w-full  h-[300px] sm:h-[400px] bg-white/5 rounded-md animate-pulse"></div>
          ) : (
            <img
              src={`https://snowbank.io/NFTs/sn${myNFTID}.png`}
              onError={handleImageError}
              alt="NFT"
              className="w-full border-opacity-30 h-[300px] sm:h-[400px] object-cover"
            />
          )}
        </div>
      </div>
    );
  }
}
