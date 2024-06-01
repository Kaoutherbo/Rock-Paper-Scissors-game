import React from 'react';
import './styles/tail.css';
import Router from './Routes/Routing';

function App() {
  return (
    <div className="App bg-radial-gradient flex flex-col items-center w-screen h-screen font-barlow-semi-condensed text-white uppercase">
      <Router />
    </div>
  );
}

export default App;
