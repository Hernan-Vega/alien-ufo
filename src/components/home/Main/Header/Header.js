import searchplanets from "../../../../assets/searchplanets.png";
import ufomartial from "../../../../assets/ufomartial.svg";
import "./Header.scss";

function Header({ date, search, handleSearchChange, handleSubmitSearch }) {
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

  return (
    <header className="header">
      <div className="header__contener">
        <img src={ufomartial} alt="not charged" />
        <span>{time()}</span>
      </div>
      <form onSubmit={() => handleSubmitSearch} className="header__form">
        <input
          type="text"
          value={search}
          onChange={() => handleSearchChange}
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
