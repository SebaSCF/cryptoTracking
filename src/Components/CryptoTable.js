import React from "react";
import Crypto from "../Components/Crypto";
import Loading from "./Loading";

const CryptoTable = ({ filterCrypto, Select }) => {


  if(!filterCrypto) return <Loading />;

  return (
    <div className="cryptoTable bg-light p-4 container">
      <table className="table " style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>SYMBOL</th>
            <th>NAME</th>
            <th>VALUE</th>
            <th>INCREASE/DECREASE (DAILY)</th>
          </tr>
        </thead>

        <tbody>
          {Select === "1-5 Results"
            ? filterCrypto
                .slice(0, 5)
                .map((crypto) => (
                  <Crypto
                    filterCrypto={filterCrypto}
                    id={crypto.id}
                    key={crypto.id}
                    image={crypto.image}
                    symbol={crypto.symbol}
                    name={crypto.name}
                    current_price={crypto.current_price.toFixed(2)}
                    change_percentage={crypto.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                  />
                ))
            : filterCrypto
                .slice(0, 5)
                .map((crypto) => (
                  <Crypto
                    id={crypto.id}
                    filterCrypto={filterCrypto}
                    key={crypto.id}
                    image={crypto.image}
                    symbol={crypto.symbol}
                    name={crypto.name}
                    current_price={crypto.current_price.toFixed(2)}
                    change_percentage={crypto.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                  />
                ))}

          {Select === "1-10 Results"
            ? filterCrypto
                .slice(0, 10)
                .map((crypto) => (
                  <Crypto
                    id={crypto.id}
                    filterCrypto={filterCrypto}
                    key={crypto.id}
                    image={crypto.image}
                    symbol={crypto.symbol}
                    name={crypto.name}
                    current_price={crypto.current_price.toFixed(2)}
                    change_percentage={crypto.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                  />
                ))
            : null}

          {Select === "1-20 Results"
            ? filterCrypto
                .slice(0, 20)
                .map((crypto) => (
                  <Crypto
                    id={crypto.id}
                    filterCrypto={filterCrypto}
                    key={crypto.id}
                    image={crypto.image}
                    symbol={crypto.symbol}
                    name={crypto.name}
                    current_price={crypto.current_price.toFixed(2)}
                    change_percentage={crypto.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                  />
                ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
