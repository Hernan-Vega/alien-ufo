import searchplanets from "../../../../assets/searchplanets.png";
import ufomartial from "../../../../assets/ufomartial.svg";
import "./Header.scss";

function Header({ date }) {
  return (
    <header className="header">
      <div className="header__contener">
        <img src={ufomartial} alt="not charged" />
        <div className="header__clock">
          <span>{date.toLocaleTimeString()}</span>
        </div>
      </div>
      <form className="header__form">
        <input
          type="text"
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
