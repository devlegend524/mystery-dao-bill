import React from "react";
import Image from "next/image";
export default function TokenInfoByChain({ chain }) {
  return (
    <div className="cardBg rounded-3xl shadow-md w-full mx-2 flex flex-col justify-between border-2 border-purple-500 text-sm">
      <p className="flex gap-1 rounded-tl-2xl rounded-br-3xl bg-[#6737ae] p-2 px-4 w-24 text-center">
        {chain}
      </p>
      <div className="flex justify-center">
        <Image
          src="/images/logos/bill.png"
          width={100}
          height={100}
          alt="icon"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between mt-4">
          <p>Total Supply:</p>
          <p className="base">26.06.2024</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Liquidity:</p>
          <p className="base">$300.23</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>MarketCap</p>
          <p className="base">$4,323.23</p>
        </div>
      </div>
    </div>
  );
}
