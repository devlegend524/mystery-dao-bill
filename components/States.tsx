import React from "react";
import PieChart from "@/components/Charts/PieChart";
import Image from "next/image";
export default function Stetes() {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex justify-center items-center gap-4 divide-x-0 lg:divide-x-2 bg-gradient-to-l from-[#22113d] via-black-950 to-[#050209]  p-8 rounded-3xl shadow-lg border-2 border-purple-500">
        <div className="text-left px-8">
          <p>Your Global Balance:</p>
          <div className="flex justify-item-center gap-2">
            <Image
              src="/images/logos/bill.png"
              width={30}
              height={30}
              alt="icon"
            />
            <p className="text-xl font-bold">30,000.23 $</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Total Supply</p>
          <div className="flex justify-item-center gap-2">
            <Image
              src="/images/logos/bill.png"
              width={30}
              height={30}
              alt="icon"
            />
            <p className="text-xl font-bold">235.432 $</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Global Liquidity:</p>
          <div className="flex justify-item-center gap-2">
            <Image
              src="/images/logos/bill.png"
              width={30}
              height={30}
              alt="icon"
            />
            <p className="text-xl font-bold">30,000.23 $</p>
          </div>
        </div>
        <div className="text-left px-8">
          <p>Global MarketCap:</p>
          <div className="flex justify-item-center gap-2 ">
            <Image
              src="/images/logos/bill.png"
              width={30}
              height={30}
              alt="icon"
            />
            <p className="text-xl font-bold">4,323.49 $</p>
          </div>
        </div>
      </div>
      <PieChart />
    </div>
  );
}
