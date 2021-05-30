import { useState, useEffect } from "react";

import { Header } from "./Header/Header";
import { AllTables } from "./AllTables/AllTables";
import { Scorers } from "./Scorers/Scorers";

import "./Main.scss";

function Main() {
  const [search, setSearch] = useState("");
  const [league, setLeague] = useState({
    name: "premierleague",
    leagueId: "26c5ff8af22234160c8e7117ef408ba5bfe44750b2fbfafbb1458d74",
  });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(function () {
      setDate(new Date());
    }, 1000);

    return function cleanClock() {
      clearInterval(timerID);
    };
  });

  function handleSearchChange(event) {
    const settedSearch = event.target.value;
    setSearch(settedSearch);
  }

  function handleSubmitSearch(event) {
    event.preventDefault();

    if (search !== "") {
      window.open(`https://www.google.com/search?q=${search}`, "_blank");
    }
    setSearch("");
  }

  function clickedTeamOrName(ton) {
    setSearch(ton);
  }

  function clickedLeague(clickedLeague, apiId) {
    setLeague({ name: clickedLeague, leagueId: apiId });
  }

  return (
    <div className="space">
      <Header
        date={date}
        search={search}
        handleSearchChange={handleSearchChange}
        handleSubmitSearch={handleSubmitSearch}
      />
      <main className="space__main">
        <AllTables
          clickedTeam={clickedTeamOrName}
          clickedLeague={clickedLeague}
          league={league.name}
        />
        <Scorers
          date={date}
          league={league.leagueId}
          clickedTeamOrName={clickedTeamOrName}
        />
      </main>
    </div>
  );
}

export { Main };
