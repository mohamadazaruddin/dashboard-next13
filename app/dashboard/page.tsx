"use client";
import React, { useEffect } from "react";
import "../../styles/globals.css";
import Learning from "../components/Learning";
import MonthlyPinned from "../components/MonthlyPinned";
import ProfileDetails from "../components/ProfileDetails";
import TodayPlans from "../components/TodayPlans";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Dashboard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex h-full w-full">
      <div
        className="w-[50%]"
        data-aos="zoom-in"
        data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <TodayPlans />
      </div>
      <div
        className="w-[50%]"
        data-aos="zoom-in"
        data-aos-delay="250"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <MonthlyPinned />
        <Learning />
      </div>
      <div
        className="w-[12%] border-l-2 border-[#eee6e2]"
        data-aos="zoom-in"
        data-aos-delay="350"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <ProfileDetails />
      </div>
    </div>
  );
}
