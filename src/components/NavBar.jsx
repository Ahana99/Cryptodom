import { useContext, useRef } from "react";
import Coinscontext from "../contexts/CoinsContext";

function NavBar() {
  const search = useRef("");
  const context = useContext(Coinscontext);
  return (
    <div className="search--bar">
      <input
        type="text"
        placeholder="Search..."
        ref={search}
        className="search--input"
        onChange={(e)=>context.setSearchStr(e.target.value)}
      ></input>
    </div>
  );
}
export default NavBar;
