"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Dashboard from "./dashboard/page";
import SideNav from "./SideNav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  if (mounted) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  return (
    <html className={mounted ? "light" : "dark"}>
      <head />
      <body>
        <div className="bg-primary dark:bg-[#17161B]  h-screen overflow-y-auto py-5">
          <div className="flex h-full w-full">
            <div className="h-full">
              {/* <div className="text-end px-5">
                <button onClick={() => setMounted(!mounted)}>
                  {mounted ? (
                    <MdDarkMode />
                  ) : (
                    <MdLightMode className="text-white-100" />
                  )}
                </button>
              </div> */}
              <SideNav />
            </div>
            <div className="h-full w-full"> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
