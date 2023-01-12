"use client";
import Link from "next/link";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import React, { useEffect, useState } from "react";
import {
  DashboardIcon,
  DegreeIcon,
  LogoutIcon,
  ResourceIcon,
  SettingIcon,
} from "./components/Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
export default function SideNav() {
  const [mounted, setMounted] = useState(false);
  const path = usePathname();
  console.log(path, "path");
  useEffect(() => {
    AOS.init();
    setMounted(true);
  }, []);

  return (
    <div
      className="w-64 py-2 px-8  h-full flex flex-col	justify-between"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div>
        <div className="flex justify-center">
          <Link href={"/"}>
            <img
              src="/logo.png"
              width="120"
              className="dark:hidden"
              alt="logo"
            />
            <img
              src="/logoDark.png"
              width="120"
              className="dark:block hidden"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="mt-6  dark:text-white-100 ">
          <ul className="list-none">
            <li>
              <Link
                href="/dashboard"
                className={`py-2 font-semibold px-3 	 w-full block 
                 ${
                   path == "/dashboard"
                     ? "bg-primary-200 dark:bg-[#0E0E0E]"
                     : " "
                 } 
                 hover:bg-primary-200 dark:hover:bg-[#0E0E0E] `}
              >
                <div className="flex items-center	">
                  <span className="pr-1.5 w-7 ">
                    <DashboardIcon />
                  </span>
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="py-2 font-semibold px-3 dark:hover:bg-[#0E0E0E]	 w-full block hover:bg-primary-200 dark:hover:bg-[#0E0E0E]"
              >
                <div className="flex items-center">
                  <span className="pr-1.5 w-7">
                    <DegreeIcon />
                  </span>
                  Education
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200 dark:hover:bg-[#0E0E0E]"
              >
                <div className="flex items-center	">
                  <span className="pr-1.5 w-7">
                    <ResourceIcon />
                  </span>
                  Resources
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200 dark:hover:bg-[#0E0E0E]"
              >
                <div className="flex items-center	">
                  <span className="pr-1.5 w-7">
                    <SettingIcon />
                  </span>
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center ">
        <button className="flex items-center  font-semibold dark:text-white-100">
          <div className="h-[40px] w-[40px] grid place-items-center rounded-full bg-[#000] dark:bg-[#2746e6] text-[#fff] mr-[10px]  ">
            <LogoutIcon />
          </div>{" "}
          Log out
        </button>
      </div>
    </div>
  );
}
