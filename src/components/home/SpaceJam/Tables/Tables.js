import { useState, useEffect } from "react";

import axios from "axios";

import "./Tables.scss";

function Tables() {
  const [premier, setPremier] = useState([]);

  useEffect(() => {
    const optionsPremier = {
      method: "GET",
      url: "https://football98.p.rapidapi.com/premierleague/squads",
      headers: {
        "x-rapidapi-key": "e8bf33b920msh02d6626f14e79c3p1b6a98jsnc0fae218d427",
        "x-rapidapi-host": "football98.p.rapidapi.com",
      },
    };

    async function getPremierTable() {
      const myTable = await axios.request(optionsPremier);
      try {
        setPremier(myTable.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPremierTable();
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
            <th></th>
            <th>Team</th>
            <th>Points</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
          </tr>
          {premier.map(
            ({
              squad_position,
              squad_name,
              squad_points,
              squad_played,
              squad_winned,
              squad_loosed,
              squad_tie,
            }) => (
              <tr key={squad_name}>
                <td>{squad_position}</td>
                <td>{squad_name}</td>
                <td>{squad_points}</td>
                <td>{squad_played}</td>
                <td>{squad_winned}</td>
                <td>{squad_tie}</td>
                <td>{squad_loosed}</td>
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
}
export { Tables };
