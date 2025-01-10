import React from "react";

export default function RewardCard() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="cardBg rounded-3xl shadow-md flex flex-col justify-between border-2 border-purple-500 text-sm"
          >
            <p className="flex gap-1 rounded-tl-2xl rounded-br-3xl bg-[#6737ae] p-2 px-4 w-24 text-center">
              Locked
              <svg
                className="flex h-5 w-5 text-white-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {" "}
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />{" "}
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </p>
            <div className="flex justify-center">
              <img src="images/logos/usdcLock.png" alt="icon" />
            </div>
            <div className="p-6">
              <div className="text-center ">
                <p>AVAILABLE REWARDS:</p>
                <p className="text-2xl font-bold flex justify-center gap-2">
                  <img src="/images/logos/usdc.png" alt="icon" />
                  4,323.49 $
                </p>
              </div>
              <button className="bg-[#8646df] hover:bg-purple-800 py-2 px-4 rounded-lg shadow-md mt-4 w-full">
                Claim Rewards
              </button>
              <div className="flex justify-between mt-4">
                <p>Unlock Date:</p>
                <p className="base">26.06.2024</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Staked Deposit:</p>
                <p className="base">$300.23</p>
              </div>
              <div className="flex justify-between mt-2">
                <p>Rewards</p>
                <p className="base">$4,323.23</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
