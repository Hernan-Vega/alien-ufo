import React, { useEffect, useState } from "react";

import { Header } from "./Header/Header";
import { AllTables } from "./AllTables/AllTables";
import { Notices } from "./Notices/Notices";

import "./SpaceJam.scss";

function SpaceJam() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(function () {
      setDate(new Date());
    }, 1000);

    return function cleanClock() {
      clearInterval(timerID);
    };
  });

  return (
    <div className="space">
      <Header date={date} />
      <main className="space__main">
        <AllTables />
        <Notices />
      </main>
    </div>
  );
}

export { SpaceJam };
