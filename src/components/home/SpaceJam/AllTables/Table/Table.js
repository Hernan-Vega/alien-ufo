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
    <table>
      <tr>
        <th></th>
        <th id="team">Team</th>
        <th>Points</th>
        <th>MP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
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
  );
}

export { Table };
