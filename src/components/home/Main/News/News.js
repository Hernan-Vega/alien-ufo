import { useState, useEffect } from "react";

import axios from "axios";

import { PassThrouthLoading } from "react-loadingg";

import "./News.scss";

function News({ date, league }) {
  const [scorers, setScorers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const tourtunamentYear = (date.getFullYear() - 1).toString();

  function scorersHeader(leagueId) {
    switch (leagueId) {
      case "26c5ff8af22234160c8e7117ef408ba5bfe44750b2fbfafbb1458d74":
        return "PREMIER LEAGUE";
      case "33f00b6184713984f6c21c6e61d0a6d5934076f761cac6b59e19a666":
        return "SERIE A";
      case "e5e476f971fa8ea71d9e6f7be4e08740c6210fc749f0eafaa0c81df8":
        return "LA LIGA";
      default:
        break;
    }
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://sports-crawlers.p.rapidapi.com/football/tournament/${league}/season/${tourtunamentYear}/scorers`,
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_API_KEY}`,
        "x-rapidapi-host": "sports-crawlers.p.rapidapi.com",
      },
    };

    async function getScorers() {
      setIsLoading(true);
      const myNews = await axios.request(options);
      try {
        setScorers(myNews.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    getScorers();
  }, [league, tourtunamentYear]);

  return (
    <div>
      {isLoading ? (
        <PassThrouthLoading
          color="white"
          size="large"
          style={{ position: "relative" }}
        />
      ) : (
        <div className="scorers">
          <p className="scorers__header">
            TOP 5 {scorersHeader(league)} SCORERS:
          </p>
          <div className="scorers__list">
            {scorers.map(({ player_name, total, team }) => (
              <div key={player_name}>
                <p>{player_name}</p>
                <p>{total} goals</p>
                <p>{team}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { News };
