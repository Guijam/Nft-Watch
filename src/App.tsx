import React from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"><br/>
        <a href="https://paintswap.finance" target="_blank" rel="noreferrer"><img src="./logo.png" alt="logo" className="App-logo" /></a>
        <h1>
          NFT-Watch
        </h1><br/><br/>
      </header>
      <EventPrinter />
    </div>
  );
}

export default React.memo(App);
