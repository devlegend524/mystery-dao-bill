import React, { useState, useEffect } from "react";
import { useEthersProvider } from "hooks/useEthers";
import { useAccount } from "wagmi";
import { getBalance } from "utils/balanceHalper";
import { toFixed } from "utils/customHelpers";
import { useDebounce } from "use-debounce";

export default function TokenSelect({
  type,
  setOpen,
  token,
  setAmount,
  selectOnly,
  setStates,
  amount,
  setInsufficient,
  insufficient,
  estimateOutput,
  isLoading,
  tokenPrice,
}) {
  const provider = useEthersProvider();
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [localAmount, setLocalAmount] = useState("");
  const [fromParent, setFromParent] = useState(false);
  const [debouncedValue] = useDebounce(localAmount, 1000);

  const handleMaxAmount = () => {
    const maxValue =
      balance > 0 ? Number((Number(balance) - Number(0.00001)).toFixed(5)) : 0;
    setAmount(maxValue);
    handleChangeValue(maxValue);
    setInsufficient(false);
  };

  const checkAvailable = (value) => {
    if (type === "A") {
      if (Number(value) <= balance) {
        setStates(true);
        setInsufficient(false);
      } else {
        setStates(false);
        setInsufficient(true);
      }
    }
  };

  const fetchBalance = async (token) => {
    const balance = await getBalance(address, token, provider);
    setBalance(balance);
    setStates(Number(balance) > 0);
    setLoading(false);
  };

  const handleChangeValue = (value) => {
    setLocalAmount(value);
    if (type === "A") {
      if (Number(balance) <= Number()) {
        setInsufficient(true);
      } else {
        setInsufficient(false);
      }
    }
    setFromParent(false);
  };

  useEffect(() => {
    if (!selectOnly && !loading) {
      checkAvailable(localAmount);
    }
  }, [loading, localAmount]);

  useEffect(() => {
    setLoading(true);
    fetchBalance(token);
  }, [token]);

  useEffect(() => {
    if (amount !== localAmount) {
      setLocalAmount(amount);
      setFromParent(true);
    }
  }, [amount]);

  useEffect(() => {
    if (Number(debouncedValue) > 0 && !fromParent) {
      setAmount(debouncedValue);
      estimateOutput(type, debouncedValue);
      checkAvailable(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <>
      <div className="custom_input bg-primary/20">
        <div className="token_select min-w-max mr-3">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex items-center gap-3 hover:bg-primary/30 transition ease-in-out rounded-full cursor-pointer p-2 bg-primary/20 min-w-max mr-2"
          >
            {token.isTokenOnly ? (
              <img
                className="md:w-8 md:h-8 w-8 h-8 rounded-full"
                src={token?.logoA}
                alt=""
              />
            ) : (
              <div className="md:w-8 md:h-8 w-8 h-8 relative ml-2">
                <img
                  className="md:w-8 md:h-8 w-8 h-8 rounded-full absolute left-1/2 -translate-x-[80%]"
                  src={token?.logoA}
                  alt=""
                />{" "}
                <img
                  className="md:w-8 md:h-8 w-8 h-8 rounded-full  absolute left-1/2 -translate-x-[30%]"
                  src={token?.logoB}
                  alt=""
                />
              </div>
            )}
            <span className="text-sm text-gray-200 md:w-28 hidden md:block text-center">
              {token?.lpSymbol}
            </span>
            <img className="rounded-full" src="/assets/arrow-down.png" alt="" />
          </div>
          {!selectOnly && (
            <div
              onClick={handleMaxAmount}
              className="bg-primary/20 shadow-md shadow-gray hover:bg-primary/30 rounded-md px-2 py-1 text-[12px] transition ease-in-out"
            >
              max
            </div>
          )}
        </div>
        <div className="token_prices flex items-end flex-col relative w-full">
          <div className="flex absolute -top-3.5">
            {loading ? (
              <div className="bg-secondary mt-[2px]  rounded h-[12px] w-[60px] animate-pulse"></div>
            ) : (
              <div
                onClick={handleMaxAmount}
                className="text-sm text-gray-400 text-end flex cursor-pointer"
              >
                {`Balance: ${balance ? toFixed(balance, 5) : "0.0"}`}
              </div>
            )}
          </div>
          <input
            type="number"
            className="text-xl text-gray-200 text-end flex items-center bg-red"
            placeholder="0.0"
            min={0}
            value={localAmount}
            onChange={(e) => handleChangeValue(e.target.value)}
          />
          <div className="flex absolute -bottom-3">
            {isLoading ? (
              <div className="bg-secondary mt-[2px]  rounded h-[12px] w-[60px] animate-pulse"></div>
            ) : (
              <div className="text-xs text-gray-600 text-end flex cursor-pointer">
                {`~$${
                  localAmount && tokenPrice
                    ? toFixed(localAmount * tokenPrice, 5)
                    : "0.0"
                }`}
              </div>
            )}
          </div>
          {insufficient && (
            <p className="absolute -bottom-9  text-[12px] text-red-500">
              Insufficient Balance
            </p>
          )}
        </div>
      </div>
    </>
  );
}
