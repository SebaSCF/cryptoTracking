import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import Loading from "./Loading";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "#ffffff",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        maintainAspectRatio: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const CryptoDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState();

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(Details);

  //UseEffect for Animations
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  if (!Details) return <Loading />;

  return (
    <div data-aos="fade-up" className="Details container pt-4">
      <div
        style={{ backgroundColor: "#0084eb", color: "#ffffff" }}
        className="detailsContainer p-4 bg-blue"
      >
        <h1>
          <img src={Details.image.large} style={{ width: "8%" }} />
          <b>{Details.name}</b>
        </h1>
        <div className="d-flex flex-row">
          <div style={{ flex: "1" }}>
            <b>
              {Details.symbol ? Details.symbol.toUpperCase() : "No data"} / $USD
            </b>
            <p>{Details.market_data.current_price.usd} $USD </p>
          </div>
          <div style={{ flex: "1" }}>
            <b>Profit/Loss(Daily):</b>
            <p>
              {Details.market_data.price_change_percentage_24h_in_currency.usd}
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <b>Lastest Update:</b>
            <p>{Details.last_updated}</p>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row">
          <div style={{ flex: "2", backgroundColor:"#ffffff", padding:"24px", borderRadius:"1%" }}>
            <Line data={data} options={options} />
          </div>
          <div
            className="d-flex flex-column"
            style={{ flex: "1", marginLeft: "12px" }}
          >
            <p style={{ fontSize: "20px"}}>
              <b>High:</b> {Details.market_data.high_24h.usd}$
            </p>
            <p style={{ fontSize: "20px"}}>
              <b>Price:</b> {Details.market_data.current_price.usd}$
            </p>
            <p style={{ fontSize: "20px"}}>
              <b>Low:</b> {Details.market_data.low_24h.usd}$
            </p>
            <p></p>
          </div>
        </div>
        <div className="description pt-2">
          <hr />
          <h2>Description</h2>
          <p>{Details.description.es}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
