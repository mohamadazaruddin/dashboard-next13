import React, { useEffect } from "react";
import { BacteriaIcon, HumanIcon, MedIcon, VirusIcon } from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Learning() {
  const pinnedData = [
    {
      title: "Viruses",
      status: "96% progress",
      icon: <VirusIcon />,
      bgColor: "bg-[#e9e8ea]",
    },
    ,
    {
      title: "Med science",
      status: "7% progress",
      icon: <MedIcon />,
      bgColor: "bg-[#fcede3]",
    },
    {
      title: "Bacterial cells",
      status: "33% progress",
      icon: <BacteriaIcon />,
      bgColor: "bg-[#f7ecea]",
    },
    {
      title: "Human gens",
      status: "58% progress",
      icon: <HumanIcon />,
      bgColor: "bg-[#e7eae9]",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-8  ">
      <div className="flex justify-between">
        <div>
          <h3 className="text-md font-semibold dark:text-white-100">
            My learnings
          </h3>
          <p className="text-xs text-gray-500 font-semibold mt-1">
            Your progress of medical Lectures
          </p>
        </div>
        <div className=" text-lg font-semibold text-gray-500">...</div>
      </div>
      <div className=" grid grid-flow-col grid-rows-2 mt-7 ">
        {pinnedData.map((data: any, i) => (
          <div key={i} className=" bg-primary flex mb-6 dark:bg-[#17161B] ">
            <div
              className={`${data.bgColor} flex items-center	 justify-center	px-3 mr-3 `}
            >
              <div>{data?.icon}</div>
            </div>
            <div>
              <h2 className=" text-md font-bold dark:text-white-100	">
                {data?.title}
              </h2>
              <p className="text-xs text-gray-500 ">{data?.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
