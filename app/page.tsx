import React from "react";
import "../styles/globals.css";
import Learning from "./components/Learning";
import MonthlyPinned from "./components/MonthlyPinned";
import SideNav from "./SideNav";

function Home() {
  return (
    <>
      <div className="text-lg bg-white-100 w-full">
        fb Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, sunt reiciendis consequatur tempore pariatur nam
        praesentium illo earum! Facere quas error corrupti in impedit qui
        voluptate quasi obcaecati hic sint. ffbffb
      </div>
      <div>
        <MonthlyPinned />
        <Learning />
      </div>
    </>
  );
}

export default Home;
