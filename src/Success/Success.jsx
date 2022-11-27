import React, { useState } from "react";
import { saveAs } from "file-saver";
import music from "./../assets/music.mp3";
import "./Success.css";

const Success = () => {
  const [, setName] = useState(null);
  const downloadImage = () => {
    saveAs("https://i.postimg.cc/FsGBCytr/initiate-1.png", "ticket.png"); // Put your image url here.
  };
  return (
    <div className="success">
      <audio autoPlay>
        <source src={music} type="audio/mpeg" />
      </audio>

      <img
        className="image fadeinout"
        src={`https://i.postimg.cc/sXQLRjxX/SAVE-20221127-153303.jpg`}
        alt=""
      />
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
        <button className="bttn" onClick={downloadImage}>
          Download Pass
        </button>
      </div>
    </div>
  );
};

export default Success;
