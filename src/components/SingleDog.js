import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleDog.css";

function SingleDog({ dogs }) {
  const { name } = useParams();

  const dog = dogs.filter((item) => item.name === name);
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="pic">
        <img src={dog[0].image} alt="dog" />
      </div>
      <div className="name">This is {dog[0].name}</div>
      <div className="motto">
        {dog[0].name}'s motto is: {dog[0].motto}
        <p>
          <button onClick={() => navigate("/")}>Back</button>
        </p>
      </div>
    </div>
  );
}

export default SingleDog;
