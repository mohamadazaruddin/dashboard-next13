import React from "react";
import { ExclamationIcon, OneIcon, TickIcon } from "./Icons";

export default function MonthlyPinned() {
  const pinnedData = [
    {
      category: "Next-gen immuno",
      title: "Multispecific liquids analysis",
      status: "New Feedback",
      icon: <OneIcon />,
      bgColor: "bg-[#f7dac0]",
      days: "5d",
    },
    {
      category: "Harmony",
      title: "Protien characterization during childhood and pregnancy",
      status: " Deadline is  today",
      icon: <ExclamationIcon />,
      bgColor: "bg-[#000000]",
      days: "5d",
    },
    ,
    {
      category: "Pharmaceutical",
      title: "Quick element dissolution testing",
      status: "Accepted",
      icon: <TickIcon />,
      bgColor: "bg-[#a6bcc4]",
      days: "5d",
    },
  ];
  return (
    <div>
      <div className="px-8 py-5 ">
        <div className="flex justify-between ">
          <div className="text-md font-semibold">Monthly pinned</div>
          <div className="text-sm text-gray-500 ">view all</div>
        </div>
        <div className="mt-4">
          {pinnedData.map((data, i) => (
            <div
              key={i}
              className="p-5 bg-primary border border-primary-200 mb-4"
            >
              <p className="text-xs text-gray-500 flex justify-between">
                {data?.category}
                <span> {data?.days}</span>
              </p>
              <h2 className=" text-md font-bold	mt-1">{data?.title}</h2>

              <div className="flex items-center mt-3">
                <div
                  className={` w-[14px] h-[14px] flex items-center justify-center ${data?.bgColor}  rounded-full mr-1 mt-[2px]`}
                >
                  {data?.icon}
                </div>
                <div className=" text-sm	"> {data?.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
