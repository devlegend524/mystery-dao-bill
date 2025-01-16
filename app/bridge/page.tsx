import React from "react";
import Chainlist from "../components/chainlist";
export default function Bridge() {
  return (
    <div className="min-h-screen backgorundColor text-white p-8">
      <h1 className="text-6xl font-bold text-center m-10 p-2">BRIDGE</h1>

      <div className="grid gap-6 max-w-xl mx-auto">
        {/* Investment Card */}
        <div className="bg-gradient-to-b from-[#5f36ac] to-[#0f0617] p-6 rounded-3xl shadow-md border-2 border-purple-500 text-sm">
          <div className="flex justify-between">
            <Chainlist />
            <button
              className="disabled:text-grey cursor-pointer items-center justify-center rounded-lg border border-transparent font-semibold transition-all duration-[250ms] disabled:cursor-default active:mediumBlue text-blue hover:text-mediumBlue bg-transparent mx-auto mb-2 flex h-auto flex-none p-2 md:mb-[3px]"
              type="button"
              data-testid="bridge-switch-chains-button"
            >
              <span className="inline-flex items-center text-inherit text-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  color="#AAB3CA"
                  id="3192"
                  className="text-blue h-6 w-6 rotate-90 md:rotate-0"
                >
                  <path
                    d="M6.667 7.333H20M16 4l4 3.314-4 3.353M17.333 16.667H4M8 20l-4-3.314 4-3.352"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
            <Chainlist />
          </div>
        </div>
      </div>
    </div>
  );
}
