import searchplanets from "../../../../assets/searchplanets.png";
import "./Search.scss";

function Search() {
  return (
    <form>
      <input type="text" placeholder="Search something extraterrestrial" />
      <button type="submit">
        <img src={searchplanets} alt="search" />
      </button>
    </form>
  );
}

export { Search };
