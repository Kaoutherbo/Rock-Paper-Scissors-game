import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Circle from "../layouts/Circle";
import "../styles/input.css";
import "../styles/tail.css";

const choices = {
  rock: rock,
  paper: paper,
  scissors: scissors,
};

// to get the result 
const getResult = (user, house) => {
  if (user === house) return "draw";
  if (
    (user === "rock" && house === "scissors") ||
    (user === "paper" && house === "rock") ||
    (user === "scissors" && house === "paper")
  ) {
    return "win";
  }
  return "lose";
};


export default function ResultChoices({ updateScore }) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const userChoice = location.state?.choice;

  const [houseChoice, setHouseChoice] = useState(null); 
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!userChoice) {
      navigate("/"); 
      return;
    }

    const randomChoice = Object.keys(choices)[Math.floor(Math.random() * 3)];
    setHouseChoice(randomChoice);
    const gameResult = getResult(userChoice, randomChoice);
    setResult(gameResult);
    if (gameResult === "win") {
      updateScore((prev) => prev + 1);
    } else if (gameResult === "lose") {
      updateScore((prev) => (prev > 0 ? prev - 1 : 0));
    } 
  }, [userChoice, updateScore, navigate]);


  if (!userChoice) {
    return null; 
  }

  return (
    <div className="flex gap-[4rem] mb-[4rem] mt-[4rem]">
      <div className="flex flex-col gap-[2rem] items-center">
        <p className="uppercase text-xl font-bold">You picked</p>
        <Circle Img={choices[userChoice]} width="200px" height="200px" gradientClass={userChoice} />
      </div>
      
      <div className="self-center">
        <h2 className="text-[3rem] uppercase font-bold mt-10">You {result}</h2>
        <button
          className="font-semibold w-[165px] h-[35px] rounded-md bg-white text-red-600 uppercase cursor-pointer"
          onClick={() => navigate("/")}
        >
          Play again
        </button>
      </div>

      <div className="flex flex-col gap-[2rem] items-center">
        <p className="uppercase text-xl font-bold">The house picked</p>
        <Circle Img={choices[houseChoice]} width="200px" height="200px" gradientClass={houseChoice} />
      </div>
    </div>
  );
}
