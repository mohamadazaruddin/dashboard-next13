"use client";
import Link from "next/link";

import {
  MdAccountCircle,
  MdArrowRightAlt,
  MdDarkMode,
  MdKeyboardBackspace,
  MdLightMode,
  MdOutlineMenu,
} from "react-icons/md";
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
import ProfileDetails from "./components/ProfileDetails";
export default function SideNav(props: {
  colorModeSwitcher: () => void;
  colorMode: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [showMenu, setshowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const path = usePathname();
  // console.log(path, "path");
  useEffect(() => {
    AOS.init();
    setMounted(true);
  }, []);
  const openMenu = () => {
    if (!showMenu) {
      setshowMenu(true);
    } else {
      setshowMenu(false);
    }
    console.log(showMenu, "showmneu");
  };
  const openProfile = () => {
    if (!showProfile) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
    console.log(showProfile, "showmneu");
  };

  return (
    <>
      <div
        className="lg:w-64  max-[768px]:hidden py-5 px-8 max-[768px]:p-0 h-full flex flex-col	justify-between"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div>
          <div className=" text-end ">
            <button onClick={() => props.colorModeSwitcher()}>
              {props.colorMode === "light" ? (
                <MdDarkMode />
              ) : (
                <MdLightMode className="text-white-100" />
              )}
            </button>
          </div>
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
      <div
        className={`   bg-primary h-full top-0  ${
          showMenu ? "left-0" : "left-[-150px]"
        } ${
          showMenu ? "w-[150px]" : "w-0"
        } bottom-0  z-50	  absolute ease-out duration-300 dark:bg-[#17161b]`}
      >
        {showMenu ? (
          <div className="flex flex-col justify-between h-full">
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
            <div className="text-end w-full px-4 py-5">
              <button onClick={openMenu}>
                <MdKeyboardBackspace className="text-[20px] dark:text-white-100" />
              </button>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
      <div
        className={`   bg-primary h-full top-0  ${
          showProfile ? "right-0" : "right-[-150px]"
        } ${
          showProfile ? "w-[150px]" : "w-0"
        } bottom-0  z-50	  absolute ease-out duration-300 dark:bg-[#17161b]`}
      >
        {showProfile ? (
          <div className="flex flex-col justify-between h-full">
            <div className="h-full">
              <ProfileDetails />
            </div>
            <div className="text-start w-full px-4 py-5">
              <button onClick={openProfile}>
                <MdArrowRightAlt className="text-[20px] dark:text-white-100" />
              </button>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>

      <div
        className="hidden  max-[768px]:block py-4 px-4"
        // data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="flex justify-between items-center ">
          <div className="menu btn">
            <button onClick={openMenu}>
              <MdOutlineMenu className="text-[20px] dark:text-white-100" />
            </button>
          </div>
          <div className="image m-auto">
            <Link href={"/"}>
              <img
                src="/logo.png"
                width="80"
                className="dark:hidden"
                alt="logo"
              />
              <img
                src="/logoDark.png"
                width="80"
                className="dark:block hidden"
                alt="logo"
              />
            </Link>
          </div>
          <div className="menu btn flex items-center">
            <div className="mr-6">
              <button onClick={props.colorModeSwitcher}>
                {props.colorMode === "light" ? (
                  <MdDarkMode />
                ) : (
                  <MdLightMode className="text-white-100" />
                )}
              </button>
            </div>
            <div>
              <button onClick={openProfile} className="rounded-full">
                <MdAccountCircle className="text-[20px] dark:text-white-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
