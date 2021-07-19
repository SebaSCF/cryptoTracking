import React from "react";
import "../Styles/Crypto.css";
import { Link } from "react-router-dom";

const Crypto = ({
  image,
  name,
  symbol,
  current_price,
  change_percentage,
  id,
}) => {
  return (
    <tr>
      <td>
        <img src={image} style={{ width: "40px", paddingRight: "05px" }} />
        <b>{symbol.toUpperCase()}</b>
      </td>
      <td>{name}</td>
      <td>{current_price}</td>
      {change_percentage > 0 ? (
        <td className="text-success">{change_percentage} %</td>
      ) : (
        <td className="text-danger">{change_percentage} %</td>
      )}

      <td>
        <Link
          to={"/" + id}
          style={{
            backgroundColor: "#eb6500",
            color: "#ffffff",
            border: " 1px solid #eb6500",
          }}
          className="btn"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default Crypto;
