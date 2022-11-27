import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";

import logo from "./assets/hints.png";

const questions = [
  {
    question: "If Apple made a car, what would it be missing?",
    hint: "let's try not to figure out EVERYTHING AT ONCE",
    answer: "windows",
  },
  {
    question: "The more of this there is, the less you see",
    hint: "We are talking about your future after 4 years of engineering",
    answer: "darkness",
  },
  {
    question:
      "What 5-letter word becomes shorter when you add two letters to it?",
    hint: "Maybe you don't qualify to become a basketball player",
    answer: "short",
  },
  {
    question: "You cannot keep this until you have given it",
    hint: "You are one answer away from your destination. If you can solve this last riddle then consider treating yourself with a weekend getaway to INITIATE where you are bound to have an enlightening experience, we PROMISE!",
    answer: "promise",
  },
];

const Password = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [hint, setHint] = useState(null);
  const [solution, setSolution] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const index = Math.floor(Math.random() * 4);
    setQuestion(questions[index].question);
    setHint(questions[index].hint);
    setSolution(questions[index].answer);
  }, []);

  return (
    <div className="password">
      <img className="image fadeinout" src={logo} alt="" />
      <article className="clock">
        <div className="seconds-container">
          <div className="seconds"></div>
        </div>
      </article>
      <div className="password-pop">
        <div className="password-container">
          <h2 className="question">
            {question}
            <input
              className="inp"
              type="text"
              placeholder="Your answer..."
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </h2>
          <button
            className="btn"
            onClick={() => {
              console.log(answer);
              console.log(solution);
              if (answer.toLowerCase() === solution) {
                navigate("/success");
              } else {
                window.alert(hint);
              }
            }}
          >
            UNLOCK
          </button>
          <p className="hint">Hint: The answer lies infront of you!</p>
        </div>
      </div>
    </div>
  );
};

export default Password;
