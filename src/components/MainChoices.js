import React from "react";
import { useNavigate } from "react-router-dom";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Triangle from "../images/bg-triangle.svg";
import Circle from "../layouts/Circle";
import "../styles/input.css";
import "../styles/tail.css";

export default function MainChoices() {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    navigate("/result", { state: { choice } });
  };

  return (
    <div className="flex flex-col mb-[1rem] items-center mt-3">
      <div className="flex flex-col items-center space-y-10 mt-10 relative z-20">
        <div className="flex space-x-32">
          <Circle 
            gradientClass="paper-end" 
            Img={paper} 
            width="160px" 
            height="160px" 
            onClick={() => handleChoice('paper')} 
          />
          <Circle 
            gradientClass="scissors-end" 
            Img={scissors} 
            width="160px" 
            height="160px" 
            onClick={() => handleChoice('scissors')} 
          />
        </div>
        <Circle 
          gradientClass="rock-end mt-10" 
          Img={rock} 
          width="160px" 
          height="160px" 
          onClick={() => handleChoice('rock')} 
        />
      </div>
      <div className="fixed top-[44%]">
        <img src={Triangle} alt="triangle" className="w-full" />
      </div>
    </div>
  );
}
