import { url } from "inspector";
import React from "react";
import { TimeIcon } from "./Icons";

export default function ReportsImage(props: {
  image: string;
  buttonText: string;
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className={` w-full h-full bg-cover	bg-no-repeat bg-center rounded p-5 flex flex-col	justify-between`}
      >
        <div>
          <p className="text-md font-semibold">{props.title}</p>
          <div className="flex items-center">
            <div
              className={` w-[14px] h-[14px] flex items-center justify-center bg-[#000]  rounded-full mr-1 mt-[2px]`}
              style={{ display: props.icon ? "flex" : "none" }}
            >
              {props.icon}
            </div>
            <div className="text-sm font-medium text-[#4b5563] 	">
              {props.description}
            </div>
          </div>
        </div>
        <div>
          <button
            className="px-3 py-1.5 font-semibold border text-sm "
            style={{
              display: props.buttonText ? "block" : "none",
            }}
          >
            {props.buttonText}
          </button>{" "}
        </div>
      </div>
    </>
  );
}
