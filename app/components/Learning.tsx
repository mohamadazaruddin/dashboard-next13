import React from "react";

export default function Learning() {
  const pinnedData = [
    {
      title: "Viruses",
      status: "96% progress",
    },
    {
      title: "Bacterial cells",
      status: "33% progress",
    },
    ,
    {
      title: "Med science",
      status: "7% progress",
    },
    {
      title: "Human gens",
      status: "58% progress",
    },
  ];
  return (
    <div>
      <div>
        {pinnedData.map((data, i) => (
          <div key={i} className="p-8 bg-primary border border-primary-200">
            <h2 className=" text-md font-bold	">{data?.title}</h2>
            <p className="text-xs text-gray-500 ">{data?.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
