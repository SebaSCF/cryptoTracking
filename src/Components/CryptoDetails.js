import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import Loading from "./Loading";
import CryptoChart from "./CryptoChart";
import "../Styles/CryptoDetails.css";

const CryptoDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState();
  const [ChartData, setChartData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(Details);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
    )
      .then((res) => res.json())
      .then((data) => setChartData(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(ChartData);

  //console.log(Details);

  //UseEffect for Animations
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  //If there is no data return Loading spinner
  if (!Details) return <Loading />;
  return (
    <div data-aos="fade-up" className="Details container pt-4">
      <div
        style={{ backgroundColor: "#0084eb", color: "#ffffff" }}
        className="detailsContainer p-4 bg-blue"
      >
        <h1>
          <img
            style={{ backgroundColor: "#fffff" }}
            src={Details.image.large}
            alt={Details.image.large}
            style={{ width: "8%" }}
          />
          <b>{Details.name}</b>
        </h1>
        <div className="d-flex flex-row flex-xs-column flex-sm-column flex-md-row flex-lg-row text-center">
          <div style={{ flex: "1" }}>
            <b>
              {Details.symbol ? Details.symbol.toUpperCase() : "No data"} / $USD
            </b>
            <p>{Details.market_data.current_price.usd} $USD </p>
          </div>
          <div style={{ flex: "1" }}>
            <b>Profit/Loss(Daily):</b>
            <p>
              {Details.market_data.price_change_percentage_24h_in_currency.usd >
              0
                ? Details.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  ) + "+"
                : Details.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  ) + "-"}{" "}
              %
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <b>Lastest Update:</b>
            <p>{Details.last_updated}</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row text-center"
            style={{ flex: "1", marginLeft: "12px" }}
          >
            <p style={{ fontSize: "20px", flex: "1" }}>
              <b>High:</b> {Details.market_data.high_24h.usd}$
            </p>
            <p style={{ fontSize: "20px", flex: "1" }}>
              <b>Price:</b> {Details.market_data.current_price.usd}$
            </p>
            <p style={{ fontSize: "20px", flex: "1" }}>
              <b>Low:</b> {Details.market_data.low_24h.usd}$
            </p>
            <p></p>
          </div>
          <div
            style={{
              flex: "2",
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "1%",
            }}
          >
            <CryptoChart ChartData={ChartData} />
          </div>
        </div>
        <h2 className="pt-4">Resources</h2>
          <hr />
        <div className="description d-flex flex-row flex-xs-column flex-sm-column flex-md-row flex-lg-row text-center pt-2">


          <a
            style={{
              flex: "1",
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "20px",
              margin: "24px",
            }}
            href={Details.links.homepage}
          >
            <i class="fa fa-home" aria-hidden="true"></i> Currency's Homepage
          </a>
          <a
            style={{
              flex: "1",
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "20px",
              margin: "24px",
            }}
            href={Details.links.subreddit_url}
          >
            {" "}
            <i class="fab fa-reddit" aria-hidden="true"></i> Subrreddit
          </a>
          <a
            style={{
              flex: "1",
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "20px",
              margin: "24px",
            }}
            href={Details.links.official_forum_url}
          >
            <i class="fab fa-wpforms"></i> Official Forum
          </a>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
