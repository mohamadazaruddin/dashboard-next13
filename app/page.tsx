import Link from "next/link";
import React from "react";
import "../styles/globals.css";
import Learning from "./components/Learning";
import MonthlyPinned from "./components/MonthlyPinned";
import SideNav from "./SideNav";

function Home() {
  return (
    <>
      <Link
        href="/dashboard"
        className="text-[25px] p-[15px] bg-[#000] text-[#fff]"
      >
        go to dashboard
      </Link>
    </>
  );
}

export default Home;
