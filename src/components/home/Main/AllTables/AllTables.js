import { Table } from "./Table/Table";

import "./AllTables.scss";

function AllTables({ clickedTeam, clickedLeague, league }) {
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
          onClick={() =>
            clickedLeague(
              "premierleague",
              "26c5ff8af22234160c8e7117ef408ba5bfe44750b2fbfafbb1458d74"
            )
          }
        >
          Premier League
        </button>
        <button
          type="button"
          className={
            league === "seriea" ? "left__buttons__on" : "left__buttons__off"
          }
          onClick={() =>
            clickedLeague(
              "seriea",
              "33f00b6184713984f6c21c6e61d0a6d5934076f761cac6b59e19a666"
            )
          }
        >
          Serie A
        </button>
        <button
          type="button"
          className={
            league === "liga" ? "left__buttons__on" : "left__buttons__off"
          }
          onClick={() =>
            clickedLeague(
              "liga",
              "e5e476f971fa8ea71d9e6f7be4e08740c6210fc749f0eafaa0c81df8"
            )
          }
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
