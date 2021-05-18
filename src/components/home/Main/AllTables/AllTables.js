import { useState } from "react";

import { Table } from "./Table/Table";

import "./AllTables.scss";

function AllTables({ clickedTeam }) {
  const [league, setLeague] = useState("premierleague");

  return (
    <div className="left">
      <div className="left__buttons">
        <button
          type="button"
          className={
            league === "premierleague"
              ? "left__buttons__on"
              : "left__buttons__off"
          }
          onClick={() => setLeague("premierleague")}
        >
          Premier League
        </button>
        <button
          type="button"
          className={
            league === "seriea" ? "left__buttons__on" : "left__buttons__off"
          }
          onClick={() => setLeague("seriea")}
        >
          Serie A
        </button>
        <button
          type="button"
          className={
            league === "liga" ? "left__buttons__on" : "left__buttons__off"
          }
          onClick={() => setLeague("liga")}
        >
          La Liga
        </button>
      </div>
      <div className="left__table">
        <Table league={league} clickedTeam={clickedTeam} />
      </div>
    </div>
  );
}
export { AllTables };
