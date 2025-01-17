import React from "react";
import {
  pulsechain,
  avalanche,
  bsc,
  base,
  sonic,
  mainnet,
  sepolia,
} from "wagmi/chains";
const Chainlist = () => {
  return (
    <div>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        data-dropdown-placement="bottom"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Select Chain{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownSearch"
        className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <ul
          className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownSearchButton"
        >
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-11"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Bonnie Green
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-12"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Jese Leos
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-13"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Michael Gough
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-14"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Robert Wall
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-15"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Joseph Mcfall
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-16"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Leslie Livingston
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <label
                htmlFor="checkbox-item-17"
                className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Roberta Casas
              </label>
            </div>
          </li>
        </ul>
        <a
          href="#"
          className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
          </svg>
          Delete user
        </a>
      </div>
    </div>
  );
};

export default Chainlist;
