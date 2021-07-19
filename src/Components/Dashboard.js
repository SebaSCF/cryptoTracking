import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import CryptoTable from "../Components/CryptoTable";
import "../Styles/Dashboard.css";
import AOS from "aos";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [Cryptos, setCryptos] = useState([]);
  const [Select, setSelect] = useState("");

  //Fetch Data from API
  useEffect(() => {

      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setCryptos(data))
        .catch((err) => console.log(err));

  }, []);
  // Filter based on symbol and Name
  const filterCrypto = Cryptos.filter(
    (crypto) =>
      crypto.symbol.toLowerCase().includes(search.toLocaleLowerCase()) ||
      crypto.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  //UseEffect for Animations
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <div className="Dashboard container-fluid">
      <div className="d-flex flex-column">
        <div className="searchBar p-4" data-aos="zoom-in-up">
          <SearchBar
            setSelect={setSelect}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div data-aos="zoom-in-down" className="cryptoTable">
          <CryptoTable Select={Select} filterCrypto={filterCrypto} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
