import React from "react";
import TokenInfoByChain from "@/components/TokenInfoByChain";
import States from "@/components/States";
import { AVAILABLE_CHAINS } from "@/configs";
export default function Staking() {
  return (
    <div className=" text-white p-8">
      <h1 className="text-6xl font-bold text-center m-10 p-2">BiLL HUB</h1>

      <div className="grid gap-3 container mx-auto">
        <States />
        {/* Investment Section */}
        {/* Investment Card */}
        <div className="p-2 rounded-3xl shadow-md text-sm">
          <div className="flex justify-between items-center">
            {AVAILABLE_CHAINS.map((chain, i) => (
              <TokenInfoByChain key={i} chain={chain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
