import React, { useEffect, useState } from "react";

import { Header } from "./Header/Header";

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
    </div>
  );
}

export { SpaceJam };
