"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
export const WalletConnect = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="main_btn px-5 sm:m-0 transition ease-in-out"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="m-2 py-1.5  sm:m-0  bg-[red!important]  transition ease-in-out text-[white!important] flex justify-center items-center gap-1 px-4 rounded-full"
                  >
                    Wrong network
                    <FaAngleDown className="text-xl" />
                  </button>
                );
              }
              return (
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center p-1 gap-1 bg-secondary">
                    <button
                      onClick={openChainModal}
                      className="inline-flex justify-center snow_effect_chain items-center rounded-full  transition ease-in-out text-white text-md mr-1"
                    >
                      {chain.iconUrl ? (
                        <Image
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          alt={chain.name ?? "Chain icon"}
                          src="/logo.png"
                          width={30}
                          height={30}
                        />
                      )}
                      {chain.name}
                      <FaAngleDown className="text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-center items-center p-1 bg-secondary">
                    <div className="hidden sm:inline-block text-sm font-light">
                      {account.displayBalance
                        ? ` ${account.displayBalance}`
                        : ""}
                    </div>
                    <button
                      onClick={openAccountModal}
                      className="m-2 sm:m-0 main_btn px-5 rounded-xl py-1transition py-1.5 ease-in-out flex justify-center items-center gap-1"
                      type="button"
                    >
                      {account.displayName}
                      <FaAngleDown className="text-xl" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
