import React, { useEffect } from "react";
import { ExclamationIcon, OneIcon, TickIcon } from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function MonthlyPinned() {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div className="px-8 py-4 ">
        <div className="flex justify-between ">
          <div className="text-md font-semibold dark:text-white-100">
            Monthly pinned
          </div>
          <div className="text-sm text-gray-500 ">view all</div>
        </div>
        <div className="mt-4">
          {pinnedData.map((data, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="false"
              className="p-5 bg-primary border border-primary-200 dark:border-[#0E0E0E] mb-4 dark:bg-[#0E0E0E]"
            >
              <p className="text-xs text-gray-500 flex justify-between">
                {data?.category}
                <span> {data?.days}</span>
              </p>
              <h2 className=" text-md font-bold	mt-1 dark:text-white-100">
                {data?.title}
              </h2>

              <div className="flex items-center mt-3">
                <div
                  className={` w-[14px] h-[14px] flex items-center justify-center ${data?.bgColor}  rounded-full mr-1 mt-[2px] `}
                >
                  {data?.icon}
                </div>
                <div className=" text-sm dark:text-[#F1EDED]	">
                  {" "}
                  {data?.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
