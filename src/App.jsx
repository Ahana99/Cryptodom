import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./components/Coins";
import NavBar from "./components/NavBar";
import CoinsContext from "./contexts/CoinsContext";
import CoinDetails from "./components/CoinDetails";
import useFetchData from "./custom_hooks/useFetchData";

function App() {
  const [searchStr, setSearchStr] = useState("");
  const coinsData = useFetchData(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2"
  );

  return (
    <CoinsContext.Provider value={{ coinsData, searchStr, setSearchStr }}>
      <div className="heading-main">
      <h3>Cryptodom</h3>
      <img src="src/asset/hero.gif"></img>
      </div>
      
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<CoinDetails />}>
            <Route path=":coinId" element={<CoinDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <p className="foot">
        Powered by CoinGecko <br />
        Project by Ahana Bhattacharjee
        <br />@ 2023
      </p>
    </CoinsContext.Provider>
  );
}

export default App;
