import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSeach] = useState(false);
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full   flex items-center">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-result w-full lg:w-[843px] bg-white absolute top-full z-50 left-0 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 mb-5 rounded-3xl bg-graySoft ">
            <h4 className="pl-4 text-sm font-medium underline">
              see all 10,123 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] rounded-xl bg-error h-[50px] bg-opacity-20 text-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col mb-6 gap-y-5">
              <Searchitem></Searchitem>
              <Searchitem></Searchitem>
              <Searchitem></Searchitem>
              <Searchitem></Searchitem>
            </div>
            <h3 className="mb-4 text-sm font-semibold">Related search</h3>
            <div className="flex flex-col gap-y-3 text-text2">
              <p>
                <strong>education</strong> fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Searchitem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        className="w-[50px] h-[50px] rounded-xl object-cover"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Educaition</strong> fund for Durgham famliy
        </h3>
        <p className="text-text3">by Durgham famliy</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
