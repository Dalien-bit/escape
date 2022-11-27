import logo from "./assets/initiate.png";
import React from "react";
import "./Ticket.css";
import { saveAs } from "file-saver";

const Ticket = ({ route, navigation }) => {
  const downloadImage = () => {
    saveAs("https://i.postimg.cc/FsGBCytr/initiate-1.png", "ticket.png"); // Put your image url here.
  };
  return (
    <div className="ticket">
      <img className="ticket-image" src={logo} alt="" />
      <button className="btn" onClick={downloadImage}>
        Print
      </button>
    </div>
  );
};

export default Ticket;
