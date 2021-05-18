import { useState } from "react";

import { Header } from "./Header/Header";
import { AllTables } from "./AllTables/AllTables";
import { News } from "./News/News";

import "./Main.scss";

function Main() {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    const settedSearch = event.target.value;
    setSearch(settedSearch);
  }

  function handleSubmitSearch(event) {
    event.preventDefault();

    if (search !== "") {
      window.open(`https://www.google.com/search?q=${search}`, "_blank");
    }
    setSearch("");
  }

  function clickedTeam(team) {
    setSearch(team);
  }

  return (
    <div className="space">
      <Header
        search={search}
        handleSearchChange={handleSearchChange}
        handleSubmitSearch={handleSubmitSearch}
      />
      <main className="space__main">
        <AllTables clickedTeam={clickedTeam} />
        <News />
      </main>
    </div>
  );
}

export { Main };
