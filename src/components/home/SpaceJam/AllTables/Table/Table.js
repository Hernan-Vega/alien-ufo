import { useState, useEffect } from "react";

import axios from "axios";

import "./Table.scss";

function Table({ league }) {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://football98.p.rapidapi.com/${league}/squads`,
      headers: {
        "x-rapidapi-key": "e8bf33b920msh02d6626f14e79c3p1b6a98jsnc0fae218d427",
        "x-rapidapi-host": "football98.p.rapidapi.com",
      },
    };

    async function getTable() {
      const myTable = await axios.request(options);
      try {
        setStandings(myTable.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTable();
  }, [league]);

  return (
    <table className="table">
      <tr>
        <th className="table__header" id="position"></th>
        <th className="table__header" id="team">
          Team
        </th>
        <th className="table__header">Pts</th>
        <th className="table__header">MPl</th>
        <th className="table__header">W</th>
        <th className="table__header">T</th>
        <th className="table__header">L</th>
      </tr>
      {standings.map(
        ({
          squad_position,
          squad_name,
          squad_points,
          squad_played,
          squad_winned,
          squad_loosed,
          squad_tie,
        }) => (
          <tr key={squad_position}>
            <td className="table__square">{squad_position}</td>
            <td className="table__square" id="name">
              {squad_name}
            </td>
            <td className="table__square">{squad_points}</td>
            <td className="table__square">{squad_played}</td>
            <td className="table__square">{squad_winned}</td>
            <td className="table__square">{squad_tie}</td>
            <td className="table__square">{squad_loosed}</td>
          </tr>
        )
      )}
    </table>
  );
}

export { Table };
