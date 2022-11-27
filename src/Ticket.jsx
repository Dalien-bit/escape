import logo from "./assets/initiate.png";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Ticket.css";

const Ticket = ({ route, navigation }) => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(window.print(), 3000);
  }, []);

  return (
    <div className="ticket">
      <img className="" src={logo} alt="" />
      <p className="name">{location.state.name}</p>
    </div>
  );
};

export default Ticket;
