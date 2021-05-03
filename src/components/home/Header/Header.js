import { Search } from "./Search/Search";

import ufomartial from "../../../assets/ufomartial.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div>
        <img src={ufomartial} alt="not charged" />
        <h1>Temperature</h1>
      </div>
      <Search />
    </header>
  );
}

export { Header };
