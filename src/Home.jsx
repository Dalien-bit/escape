import "./Home.css";
import { useNavigate } from "react-router-dom";
import hero from "./assets/blue.jpeg";
import { useState, useEffect } from "react";
import sound from "./assets/music.mp3";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("Loading");
  useEffect(() => {
    setTimeout(() => {
      setLoading("Lets Begin");
    }, 4000);
  });

  return (
    <div className="App">
      <audio autoPlay>
        <source src={sound} type="audio/mpeg" />
      </audio>
      <img className="image" src={hero} alt="" />
      <h1 className="heading">Let's INITIATE...</h1>

      <div className="progress">
        <div className="color"></div>
      </div>
      <button
        className="bttn"
        onClick={() => {
          navigate("/password", { replace: true });
        }}
      >
        {loading}
      </button>
    </div>
  );
};

export default Home;
