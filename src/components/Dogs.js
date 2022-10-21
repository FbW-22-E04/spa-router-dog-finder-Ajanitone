import React from "react";
import { Link } from "react-router-dom";
import "./Dogs.css";

function Dogs({ dogs }) {
  return (
    <div className="container">
      {dogs.map((item, idx) => {
        return (
          <Link key={idx} to={"/dogs/" + item.name}>
            <img src={item.image} alt="dog" />
            <p>
              <h3>{item.name}</h3>
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Dogs;
