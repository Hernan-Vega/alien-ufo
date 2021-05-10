import { useState, useEffect } from "react";

import axios from "axios";

import "./Tables.scss";

function Tables() {
  const [premier, setPremier] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url:
        "https://api.football-data.org/v2/competitions/2021/standings?standingType=HOME",
      headers: {
        "User-Agent": "PostmanRuntime/7.28.0",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "X-Auth-Token": "2d3fb3b10ae64c25875b5c342f75d68b",
      },
    };

    async function getTable() {
      const myTable = await axios.request(options);
      try {
        setPremier(myTable.standings[0].table);
      } catch (error) {
        console.log(error);
      }
    }
    getTable();
  }, []);

  return (
    <div claassName="left">
      <div className="left__buttons">
        <button type="button" className="left__buttons__east">
          Premier League
        </button>
      </div>
      <div className="left__table">
        <table>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
          </tr>
          {premier.map(({ position, team, points, won, draw, lost }) => (
            <tr key={team.name}>
              <td>{position}</td>
              <td>{team.name}</td>
              <td>{points}</td>
              <td>{won}</td>
              <td>{draw}</td>
              <td>{lost}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export { Tables };
