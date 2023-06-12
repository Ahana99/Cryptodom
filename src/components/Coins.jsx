import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Coinscontext from "../contexts/CoinsContext";
import Coin from "./Coin";

function Coins() {
  const context = useContext(Coinscontext);

  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <h3>Coin Name</h3>
        <h3>Price</h3>
        <h3>24h</h3>
      </div>
      {context.data.filter((coin) => coin.name.toLowerCase().includes(context.searchStr.toLowerCase())).map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <Coin coin={coin} />
          </Link>
        );
      })}
    </div>
  );
}

export default Coins;
