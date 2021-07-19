import React from "react";
import "../Styles/SearchBar.css";


const SearchBar = ({ search, setSearch, setSelect }) => {

  return (
    <div

      style={{ backgroundColor: "#0084eb", padding: "28px" }}
      className="searchBar pt-4 container"
    >
      <div style={{ textAlign: "left" }}>
        <h2 className="searchHeader" style={{ fontWeight: "900" }}>
          Searching for... <i style={{ fontWeight: "200" }}>{search}</i>{" "}
        </h2>
      </div>
      <div className="d-flex flex-row flex-sm-column flex-md-row flex-lg-row">
        <div className="form-group search w-100">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control "
            aria-describedby="helpId"
            placeholder="Search for a Cryptocurrency (Symbol / Name)"
          />
        </div>
        <div className="form-group  filter">
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="form-control"
            name="Filter"
            id="CryptoFilter"
          >
            <option>1-5 Results</option>
            <option>1-10 Results</option>
            <option>1-20 Results</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
