import React from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"><br/>
        <img src="./logo.png" alt="logo" className="App-logo" />
        <a href="https://paintswap.finance" target="_blank" rel="noreferrer"><img src="./img/ps-logo.png" alt="logo" className="Ps-logo" /></a>
        <span className="Title">
          NFT-Watch
        </span>
          <a href="https://nftkey.app/" target="_blank" rel="noreferrer"><img src="./img/nftkey-logo.svg" alt="logo" className="Nftkey-logo" /></a>
          <br/><br/>_______________________________________<br/><br/>

      </header>

      <EventPrinter />
    </div>
  );
}

export default React.memo(App);
