import { useState } from "react";

import searchplanets from "../../../../assets/searchplanets.png";
import ufomartial from "../../../../assets/ufomartial.svg";
import "./Header.scss";

function Header({ date }) {
  const [searching, setSearching] = useState("");

  function time() {
    let myMinutes = "";
    let myHours = "";

    if (date.getMinutes() < 10) {
      myMinutes = `0${date.getMinutes()}`;
    } else {
      myMinutes = `${date.getMinutes()}`;
    }

    if (date.getHours() < 10) {
      myHours = `0${date.getHours()}`;
    } else {
      myHours = `${date.getHours()}`;
    }

    return `${myHours}:${myMinutes}`;
  }

  function handleSearchChange(event) {
    const settedSearch = event.target.value;
    setSearching(settedSearch);
  }

  function handleSubmitSearch(event) {
    event.preventDefault();

    if (searching !== "") {
      window.open(`https://www.google.com/search?q=${searching}`, "_blank");
    }
    setSearching("");
  }

  return (
    <header className="header">
      <div className="header__contener">
        <img src={ufomartial} alt="not charged" />
        <div className="header__clock">
          <span>{time()}</span>
        </div>
      </div>
      <form onSubmit={handleSubmitSearch} className="header__form">
        <input
          type="text"
          value={searching}
          onChange={handleSearchChange}
          placeholder="Search something extraterrestrial"
          className="header__form__search"
        />
        <button type="submit" className="header__form__button">
          <img src={searchplanets} alt="search" />
        </button>
      </form>
    </header>
  );
}

export { Header };
