import { useState } from "react";

import { Table } from "./Table/Table";

import "./AllTables.scss";

function AllTables() {
  const [league, setLeague] = useState("premierleague");

  function showPremier() {
    setLeague("premierleague");
  }

  function showSerieA() {
    setLeague("seriea");
  }

  function showLaLiga() {
    setLeague("liga");
  }

  return (
    <div claassName="left">
      <div className="left__buttons">
        <button
          type="button"
          className="left__buttons__east"
          onClick={() => showPremier()}
        >
          Premier League
        </button>
        <button
          type="button"
          className="left__buttons__east"
          onClick={() => showSerieA()}
        >
          Serie A
        </button>
        <button
          type="button"
          className="left__buttons__east"
          onClick={() => showLaLiga()}
        >
          La Liga
        </button>
      </div>
      <div className="left__table">
        <Table league={league} />
      </div>
    </div>
  );
}
export { AllTables };
