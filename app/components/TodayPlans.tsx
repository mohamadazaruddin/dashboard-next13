import React from "react";
import { TickIcon, TimeIcon } from "./Icons";
import ReportsImage from "./ReportsImage";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TodayPlans() {
  return (
    <>
      <div
        // data-aos="fade-down"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-once="true"
        className="text-lg bg-white-100 px-8 h-full w-full py-5 delay-100 delay-100 loadinglazy	"
      >
        <div className="flex justify-between items-center ">
          <div
            className="text-md font-semibold"
            // data-aos="fade-up"
            // data-aos-delay="5000"
          >
            Today's plan
            <div className="text-sm text-gray-500 ">June 14th, 2022</div>
          </div>
          <div>
            <button className=" animate-bounce h-[40px] w-[40px] grid place-items-center rounded-full bg-[#000] text-[#fff] ">
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
              <div className="flex">
                <div className="h-[40px] w-[40px] rounded-full  bg-[url('https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg')] border-2 border-[#fff]	  bg-cover	bg-no-repeat bg-center"></div>
                <div className="h-[40px] w-[40px] rounded-full  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyiZBocltb7_wzbW8uvUQmI9s1r8Y5HimhQ&usqp=CAU')] border-2 border-[#fff]	  bg-cover	bg-no-repeat bg-center ml-[-18px]"></div>
                <div className="h-[40px] w-[40px] rounded-full  bg-[url('https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?auto=format&h=200')]  border-2 border-[#fff]	  bg-cover	bg-no-repeat bg-center ml-[-18px]"></div>
                <div className="h-[40px] w-[40px] rounded-full   border-2 border-[#fff]	flex items-center justify-center bg-[#f8d8bc]  ml-[-18px] text-[12px] font-bold">
                  +5
                </div>
              </div>
            </div>
            <div className="border-l pl-2 border-[#eee6e2]">
              <p className="font-semibold text-sm">Medi Team Meeting</p>
              <p className="text-xs text-gray-500">13:30 - 14:30</p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 mt-7 gap-x-5">
            <div className="col-span-2 w-full h-[230px]">
              <ReportsImage
                image={"/weeklyimage.jpg"}
                buttonText={"View report"}
                title={"Weekly report"}
                description={" Track your performance"}
                icon={""}
              />
            </div>
            <div className="col-span-1 mt-2.5  w-full h-[230px]">
              <ReportsImage
                image={"./studyimage.jpg"}
                buttonText={""}
                title={"Study 78X"}
                description={"in progress"}
                icon={<TimeIcon />}
              />
            </div>
            <div className="col-span-1 mt-2.5  w-full h-[230px]">
              <ReportsImage
                image={"/anylasesimage.jpg"}
                buttonText={""}
                title={"Analyses"}
                description={"completed"}
                icon={<TickIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
