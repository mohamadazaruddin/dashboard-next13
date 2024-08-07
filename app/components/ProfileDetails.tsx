import React from "react";
import { MessageIcon, PencilIcon } from "./Icons";
import Profile from "./Profile";

export default function ProfileDetails() {
  return (
    <div className="px-6 py-9 h-full w-full">
      <div className="h-full w-full flex flex-col justify-between">
        <Profile
          image="/ArnoldBlue.svg"
          name="Dr Riddle"
          post="Scientist"
          active={true}
        />
        <div className="text-center">
          <div>
            <button className=" m-auto  ">
              <PencilIcon />
            </button>
          </div>
          <div>
            <button className=" m-auto my-5 ">
              <MessageIcon />
            </button>
          </div>
          <div>
            <button className=" animate-bounce h-[30px] w-[30px] grid place-items-center rounded-full bg-[#000] text-[#fff] m-auto ">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
