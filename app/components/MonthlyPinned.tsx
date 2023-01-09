import React from "react";

export default function MonthlyPinned() {
  const pinnedData = [
    {
      category: "Next-gen immuno",
      title: "Multispecific liquids analysis",
      status: "New Feedback",
    },
    {
      category: "Harmony",
      title: "Protien characterization during childhood and pregnancy",
      status: " Deadline is  today",
    },
    ,
    {
      category: "Pharmaceutical",
      title: "Quick element dissolution testing",
      status: "Accepted",
    },
  ];
  return (
    <div>
      <div>
        {pinnedData.map((data, i) => (
          <div key={i} className="p-8 bg-primary border border-primary-200">
            <p className="text-xs text-gray-500 ">{data?.category}</p>
            <h2 className=" text-md font-bold	">{data?.title}</h2>
            <p className="font-normal	">{data?.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
