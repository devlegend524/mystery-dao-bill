import React from "react";

export default function Status() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-x-0 lg:divide-x-2 bg-gradient-to-l from-[#22113d] via-black-950 to-[#050209]  p-8 rounded-3xl shadow-lg border-2 border-purple-500">
        <div className="text-left px-8">
          <p>Your Wallet:</p>
          <div className="flex justify-item-center gap-2">
            <img src="/images/logos/metamask.png" alt="icon" />
            <p className="font-bold">BEX030...210023</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Wallet Balance:</p>
          <div className="flex justify-item-center gap-2">
            <img src="/images/logos/usdc.png" alt="icon" />
            <p className="text-xl font-bold">235.432 $</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Total Staked:</p>
          <div className="flex justify-item-center gap-2">
            <img src="/images/logos/usdc.png" alt="icon" />
            <p className="text-xl font-bold">30,000.23 $</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Total Rewards:</p>
          <div className="flex justify-item-center gap-2 ">
            <img src="/images/logos/usdc.png" alt="icon" />
            <p className="text-xl font-bold">4,323.49 $</p>
          </div>
        </div>
      </div>
    </>
  );
}
