"use client";
import React, { useState } from "react";
import NFTCard from "@/components/NFTCCard";

export default function NFTSale() {
  const saleArray = Array.from({ length: 8 });
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(41);
  const [pendingTx, setPendingTx] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <div className="min-h-screen backgorundColor text-white p-8">
      <h1 className="text-6xl font-bold text-center m-10 p-2">NFT</h1>

      <div className="grid gap-6 max-w-6xl mx-auto">
        <div className="my-4 flex gap-3">
          <button
            onClick={() => {
              setPendingTx(true);
              setActive(true);
            }}
            className={`snow_effect px-3 py-2 hover:bg-primary/40 transition ease-in-out ${
              active ? "activeBg" : ""
            }`}
          >
            Listed NFTs
          </button>
          <button
            onClick={() => {
              setPendingTx(true);
              setActive(false);
            }}
            className={`snow_effect px-3 py-2 hover:bg-primary/40 transition ease-in-out  ${
              !active ? "activeBg" : ""
            }`}
          >
            My NFTs
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full  gap-4 mt-6 mx-auto mb-8">
          {saleArray.map((_, index) => {
            if (index + page <= maxPage)
              return (
                <NFTCard
                  tokenId={index + page}
                  key={index}
                  index={index}
                  active={active}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}
