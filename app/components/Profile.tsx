import React from "react";

export default function Profile(props: {
  image: string;
  name: string;
  post: string;
  active: boolean;
}) {
  console.log(props.image, "f.sbvgsr,hjs");
  let animation = `h-[10px] w-[10px] absolute right-[15px] top-[2px] bg-[#24dd54] border border-[#fff]	 rounded-full ${
    props.active ? "animate-ping " : ""
  }`;
  return (
    <>
      <div className="text-center">
        <div className="relative">
          <img
            src={props.image}
            className={`relative m-auto w-[50px] h-[50px] rounded-full`}
          />
          <span className={animation}></span>
        </div>
        <p className="text-sm font-bold mt-[15px] dark:text-white-100">
          {props.name}
        </p>
        <p className="text-xs font-bold  text-gray-500">{props.post}</p>
      </div>
    </>
  );
}
