import Link from "next/link";
import React from "react";
import {
  DashboardIcon,
  DegreeIcon,
  ResourceIcon,
  SettingIcon,
} from "./components/Icons";

export default function SideNav() {
  return (
    <div className="w-64 py-9 px-8  h-full relative">
      <div className="flex justify-center">
        <img src="/logo.png" width="120" alt="logo" />
      </div>
      <nav className="mt-4">
        <ul className="list-none">
          <li>
            <Link
              href="/dashboard"
              className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200"
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
              className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200"
            >
              <div className="flex items-center	">
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
              className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200"
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
              className="py-2 font-semibold px-3	 w-full block hover:bg-primary-200"
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
      <div className="absolute bottom-8 left-2/4	translate-x-[-50%] ">
        <button>Log out</button>
      </div>
    </div>
  );
}
