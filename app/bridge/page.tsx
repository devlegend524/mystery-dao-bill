import React from "react";
import RewardCard from "../components/rewardCard";
import Status from "../components/status";

export default function Staking() {
  return (
    <div className="min-h-screen backgorundColor text-white p-8">
      <h1 className="text-6xl font-bold text-center m-10 p-2">BRIDGE</h1>

      <div className="grid gap-6 max-w-6xl mx-auto">
        <Status />

        {/* Action Buttons */}
        <div className="flex justify-between items-center bg-gradient-to-l from-[#1e0e34] via-black-950 to-[#0d0417] my-2 p-6 rounded-3xl text-center shadow-lg border-2 border-purple-500">
          <p className="text-left pl-8">
            STAKED: 4 TIMES | REWARDS: 2 UNLOCKED
          </p>
          <hr className="lg:w-80 h-1 bg-gradient-to-l from-purple-900 to-purple-100 border-0 rounded dark:bg-gray-900" />
          <button className="bg-gradient-to-l from-[#4d1f8d] via-[#7c70c7] to-[#6051e7] hover:bg-purple-800 py-1 px-4 rounded-lg shadow-md">
            Withdrawals
          </button>
        </div>

        {/* Investment Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Investment Card */}
          <div className="bg-gradient-to-b from-[#5f36ac] to-[#0f0617] p-6 rounded-3xl shadow-md border-2 border-purple-500 text-sm">
            <div className="flex justify-between my-2">
              <div>
                <p className="text-lg">INVEST AND GET</p>
                <p className="text-3xl font-bold p-2">6%</p>
                <p className="text-lg">EVERY 7 DAYS</p>
              </div>
              <img src="/images/logos/invest.png" alt="icon" />
            </div>
            <div className="my-4">
              <p className="flex text-2xl font-bold bg-[#07040d] p-2 rounded-xl shadow-md">
                <img src="/images/logos/usdc.png" alt="icon" />
                <input
                  type="text"
                  min="15"
                  max="10000"
                  placeholder="300.23"
                  className="w-full text-white bg-[#07040d] px-4 focus:outline-none"
                />
                <button className="text-sm">Max</button>
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#311c54] hover:bg-purple-800 border-2 border-sky-50 focus:border-sky-800 p-1 rounded-lg shadow-md w-full">
                28 DAYS
              </button>
              <button className="bg-[#311c54] hover:bg-purple-800 border-2 border-sky-50 focus:border-sky-800 p-1 rounded-lg shadow-md w-full">
                90 DAYS
              </button>
            </div>
            <button className="bg-[#8646df] hover:bg-purple-800 py-2 px-4 rounded-lg shadow-md my-4 w-full">
              Stake Now
            </button>
            <div className="flex justify-between mt-2">
              <p>Min Investment:</p>
              <p className="base">$15</p>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <p>Max Investment:</p>
              <p className="base">$10K</p>
            </div>
          </div>

          <RewardCard />
        </div>
      </div>
    </div>
  );
}
