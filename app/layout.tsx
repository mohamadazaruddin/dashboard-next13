"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import ProfileDetails from "./components/ProfileDetails";
import Dashboard from "./dashboard/page";
import SideNav from "./SideNav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [colorMode, setColorMode] = useState("");
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", "dark");
      setColorMode("dark");
    } else {
      localStorage.setItem("theme", "light");
      setColorMode("light");
    }
  }, [mounted]);

  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("theme");
    // console.log(item, "theme");
  }, [mounted]);
  return (
    <html className={`${colorMode}`}>
      <head />
      <body>
        <div className="bg-primary  dark:bg-[#17161B]  h-screen overflow-y-hidden py-5 max-[768px]:py-0">
          <div className="flex  max-[768px]:flex-col h-full w-full">
            <div className="h-full">
              <div className="text-end px-5 max-[768px]:hidden">
                <button onClick={() => setMounted(!mounted)}>
                  {colorMode === "light" ? (
                    <MdDarkMode />
                  ) : (
                    <MdLightMode className="text-white-100" />
                  )}
                </button>
              </div>
              <SideNav />
            </div>
            <div className="h-full w-full overflow-y-scroll"> {children}</div>
            <div
              className="w-[12%] max-[768px]:hidden border-l border-[#eee6e2] dark:border-gray-500"
              data-aos="zoom-out"
              data-aos-delay="350"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <ProfileDetails />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
