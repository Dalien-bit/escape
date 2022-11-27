import React, { useState } from "react";
import "./Success.css";
import logo from "./../assets/backdrop3.png";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="success">
      <img className="image fadeinout" src={logo} alt="" />
      <div className="pop">
        <div className="contain">
          <h1 className="question">Congrats you are invited to initiate!</h1>
        </div>
        <input
          className="inp"
          type="text"
          placeholder="Your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="bttn"
          onClick={() => {
            navigate("/ticket", { state: { name: name } });
          }}
        >
          Download Pass
        </button>
      </div>
    </div>
  );
};

export default Success;
