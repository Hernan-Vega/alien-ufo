import "./Tables.scss";

function Tables() {
  const easternTable = [
    {
      team: "76ers",
      city: "Philadelphia",
      wins: 45,
      losses: 21,
      pow: 0.682,
    },
    {
      team: "Bucks",
      city: "Milkwaukee",
      wins: 42,
      losses: 24,
      pow: 0.636,
    },
    {
      team: "Bulls",
      city: "Chicago",
      wins: 26,
      losses: 39,
      pow: 0.4,
    },
    {
      team: "Cavaliers",
      city: "Cleveland",
      wins: 21,
      losses: 45,
      pow: 0.318,
    },
    {
      team: "Celtics",
      city: "Boston",
      wins: 35,
      losses: 31,
      pow: 0.53,
    },
    {
      team: "Hawks",
      city: "Atlanta",
      wins: 37,
      losses: 30,
      pow: 0.552,
    },
    {
      team: "Heat",
      city: "Miami",
      wins: 35,
      losses: 31,
      pow: 0.53,
    },
    {
      team: "Hornets",
      city: "Charlotte",
      wins: 32,
      losses: 33,
      pow: 0.492,
    },
    {
      team: "Knicks",
      city: "New York",
      wins: 37,
      losses: 29,
      pow: 0.561,
    },
    {
      team: "Magic",
      city: "Orlando",
      wins: 21,
      losses: 45,
      pow: 0.318,
    },
    {
      team: "Nets",
      city: "Brooklyn",
      wins: 43,
      losses: 23,
      pow: 0.652,
    },
    {
      team: "Pacers",
      city: "Indiana",
      wins: 30,
      losses: 35,
      pow: 0.462,
    },
    {
      team: "Pistons",
      city: "Detroit",
      wins: 19,
      losses: 47,
      pow: 0.288,
    },
    {
      team: "Raptors",
      city: "Toronto",
      wins: 27,
      losses: 39,
      pow: 0.409,
    },
    {
      team: "Wizards",
      city: "Washinton",
      wins: 30,
      losses: 36,
      pow: 0.455,
    },
  ];

  const orderedArr = [...easternTable].sort((a, b) =>
    a.pow === b.pow ? 0 : a.pow < b.pow ? 1 : -1
  );

  return (
    <div claassName="left">
      <div className="left__buttons">
        <button type="button" className="left__buttons__east">
          East
        </button>
      </div>
      <table className="left__table">
        <tr>
          <th>Team</th>
          <th>W</th>
          <th>L</th>
          <th>% winning</th>
        </tr>
        {orderedArr.map(({ team, city, wins, losses, pow }) => (
          <tr key={team}>
            <td>
              {city} {team}
            </td>
            <td>{wins}</td>
            <td>{losses}</td>
            <td>{pow}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export { Tables };
