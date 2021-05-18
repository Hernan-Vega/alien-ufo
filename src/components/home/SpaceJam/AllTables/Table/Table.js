import { useState, useEffect } from "react";
import { JumpCircleLoading } from "react-loadingg";

import axios from "axios";

import "./Table.scss";

function Table({ league }) {
  const [standings, setStandings] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://football98.p.rapidapi.com/${league}/squads`,
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_API_KEY}`,
        "x-rapidapi-host": "football98.p.rapidapi.com",
      },
    };

    async function getTable() {
      setIsloading(true);
      const myTable = await axios.request(options);
      try {
        setStandings(myTable.data);
      } catch (error) {
        console.log(error);
      }
      setIsloading(false);
    }

    getTable();
  }, [league]);

  const headers = [
    { header: "", id: "position" },
    { header: "Team", id: "team" },
    { header: "Pts", id: "points" },
    { header: "Pl", id: "played matches" },
    { header: "W", id: "won" },
    { header: "T", id: "tied" },
    { header: "L", id: "loosed" },
  ];

  return (
    <div className={isloading ? "loading" : undefined}>
      {isloading ? (
        <JumpCircleLoading
          speed="0.3"
          color="white"
          size="large"
          style={{ position: "relative" }}
        />
      ) : (
        <table className="table">
          <thead>
            <tr>
              {headers.map(({ header, id }) => (
                <td className="table__header" id={id} key={id}>
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Table };
