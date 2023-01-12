import React from "react";
import { MessageIcon, PencilIcon, PlusIcon } from "./Icons";
import Profile from "./Profile";

export default function ProfileDetails() {
  return (
    <div className="px-6 py-9 h-full w-full">
      <div className="h-full w-full flex flex-col justify-between">
        <Profile
          image="https://www.rcell.in/wp-content/uploads/2017/09/doctor-img-one.png"
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
          <div className="group ">
            <button className="group-hover:animate-bounce h-[30px] w-[30px] grid place-items-center rounded-full bg-[#000] text-[#fff] m-auto ">
              <PlusIcon width={"16"} height={"16"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
