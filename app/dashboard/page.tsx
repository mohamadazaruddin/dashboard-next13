import React from "react";
import "../../styles/globals.css";
import Learning from "../components/Learning";
import MonthlyPinned from "../components/MonthlyPinned";
import ProfileDetails from "../components/ProfileDetails";
import TodayPlans from "../components/TodayPlans";
export default function Dashboard() {
  return (
    <div className="flex h-full w-full">
      <div className="w-[50%]">
        <TodayPlans />
      </div>
      <div className="w-[50%]">
        <MonthlyPinned />
        <Learning />
      </div>
      <div className="w-[12%] border-l-2 border-[#eee6e2]">
        <ProfileDetails />
      </div>
    </div>
  );
}
