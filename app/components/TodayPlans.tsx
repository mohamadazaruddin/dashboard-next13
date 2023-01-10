import React from "react";
import { TickIcon, TimeIcon } from "./Icons";

export default function TodayPlans() {
  return (
    <div className="text-lg bg-white-100 px-8 h-full w-full py-5	">
      <div className="flex justify-between items-center ">
        <div className="text-md font-semibold">
          Monthly pinned
          <div className="text-sm text-gray-500 ">June 14th, 2022</div>
        </div>
        <div>
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full bg-[#000] text-[#fff] ">
            +
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl	font-bold">
          Sustainable development goals and health innovation
        </h2>
        <div className="flex justify-between mt-7">
          <div>
            <button className="h-[40px] w-[40px] grid place-items-center rounded-full bg-[#000] text-[#fff] ">
              +
            </button>
          </div>
          <div className="border-l pl-2 border-[#eee6e2]">
            <p className="font-semibold text-sm">Medi Team Meeting</p>
            <p className="text-xs text-gray-500">13:30 - 14:30</p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 mt-7 gap-x-5">
          <div className="col-span-2 bg-[url('/weeklyimage.jpg')] w-full h-[200px] bg-cover	bg-no-repeat bg-center rounded p-5 flex flex-col	justify-between">
            <div>
              <p className="text-md font-semibold">Weekly report</p>
              <p className="text-sm font-medium text-[#4b5563]	">
                Track your performance
              </p>
            </div>
            <div>
              <button className="px-3 py-1.5 font-semibold border text-sm	 ">
                View report
              </button>{" "}
            </div>
          </div>
          <div className="col-span-1 mt-2.5 bg-[url('/studyimage.jpg')] w-full h-[230px] bg-cover	bg-no-repeat bg-center rounded p-5 flex flex-col	justify-between">
            {" "}
            <div>
              <p className="text-md font-semibold">Study 78X</p>
              <div className="flex items-center">
                <div
                  className={` w-[14px] h-[14px] flex items-center justify-center bg-[#000]  rounded-full mr-1 mt-[2px]`}
                >
                  <TimeIcon />
                </div>
                <div className="text-sm font-medium text-[#4b5563]	">
                  in progress
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1  mt-2.5 bg-[url('/anylasesimage.jpg')] w-full h-[230px] bg-cover	bg-no-repeat bg-center rounded p-5">
            <div>
              <p className="text-md font-semibold">Analyses </p>
              <div className="flex items-center">
                <div
                  className={` w-[14px] h-[14px] flex items-center justify-center bg-[#000]  rounded-full mr-1 mt-[2px]`}
                >
                  <TickIcon />
                </div>
                <div className="text-sm font-medium text-[#4b5563]">
                  completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
