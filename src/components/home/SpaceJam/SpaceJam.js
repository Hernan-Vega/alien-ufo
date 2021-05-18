import { Header } from "./Header/Header";
import { AllTables } from "./AllTables/AllTables";
import { News } from "./News/News";

import "./SpaceJam.scss";

function SpaceJam() {
  return (
    <div className="space">
      <Header />
      <main className="space__main">
        <AllTables />
        <News />
      </main>
    </div>
  );
}

export { SpaceJam };
