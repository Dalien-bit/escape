import logo from "./assets/initiate.png";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Ticket.css";

const Ticket = ({ route, navigation }) => {
  const location = useLocation();

  return (
    <div className="ticket">
      <img className="ticket-image" src={logo} alt="" />
      <button
        className="btn"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
};

export default Ticket;
