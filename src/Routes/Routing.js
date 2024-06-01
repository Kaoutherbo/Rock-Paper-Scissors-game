import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Rules from '../components/Rules';
import MainChoices from '../components/MainChoices';
import ResultChoices from '../components/ResultChoices';
import '../styles/tail.css'; 
import '../styles/input.css'; 

export default function Routing() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App overflow-hidden bg-radial-gradient flex flex-col items-center w-screen h-screen font-barlow-semi-condensed text-white uppercase">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<MainChoices />} />
          <Route path="/result" element={<ResultChoices updateScore={setScore} />} />
        </Routes>
        <button
          className="absolute bottom-6 right-14 border-[2px] border-gray-200 h-9 w-28 rounded-lg uppercase cursor-pointer"
          onClick={handlePopup}
        >
          Rules
        </button>
        {isOpen && <Rules onClose={handlePopup} />}
      </div>
    </Router>
  );
}
