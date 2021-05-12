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
          className={
            league === "premierleague"
              ? "left__buttons__on"
              : "left__buttons__off"
          }
          onClick={() => showPremier()}
        >
          Premier League
        </button>
        <button
          type="button"
          className={
            league === "seriea" ? "left__buttons__on" : "left__buttons__off"
          }
          onClick={() => showSerieA()}
        >
          Serie A
        </button>
        <button
          type="button"
          className={
            league === "liga" ? "left__buttons__on" : "left__buttons__off"
          }
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
