import React, { useEffect, useState } from "react";

import { Header } from "./Header/Header";
import { Tables } from "./Tables/Tables";
import { Notices } from "./Notices/Notices";

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
    <div>
      <Header date={date} />
      <main style={{ display: "flex" }}>
        <Tables />
        <Notices />
      </main>
    </div>
  );
}

export { SpaceJam };
