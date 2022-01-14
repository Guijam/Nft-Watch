import React, {useEffect, useState} from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';
import styled from "styled-components";
import {MarketplaceV2} from "@paintswap/marketplace-interactions";
import {Collection} from "./api/nftWatcherTypes";
import {recupCol} from "./utils/helpers";

const Events = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Header = styled.div`
  display: block;
  width: 100%;
  max-width: available;
  margin-bottom: 50px;
  align-items: center;
`

const Config = styled.a`
  //display: flow;
  //flex-direction: column;
  color: #ffd034;
  font-size: xx-large;
  background-color: rgba(40, 59, 28, 0.63);;
  border-radius: 20px;
  padding: 16px;
  //top: 10px;
  //margin-top: 60px;
  //position: relative;
`

const App: React.FC = () => {

  const [collections, setCollections] = useState();
  const [length, setLength] = useState("...")

  useEffect(() => {
    const getCols = async () => {
      let cols = await recupCol()
      // @ts-ignore
      setCollections(cols);
      setLength(()=>{
        if(cols) {
          return cols.length.toString()
        } else {
          return "..."
        }
      })
    };
    getCols();

  }, []);


  return (
    <div className="App">
      <Header className="App-header">
        <img src="./img/logo.png" alt="logo" className="App-logo" />
        <a href="https://https://nft-watch.vercel.app/#" target="_blank" rel="noreferrer"> <Config>Settings</Config>
        </a>
        <a href="https://paintswap.finance" target="_blank" rel="noreferrer"><img src="./img/ps-logo.png" alt="logo" className="Ps-logo" /></a>
        <span className="Title">
          ♥ NFT-Watch ♥
        </span>
          <a href="https://nftkey.app/" target="_blank" rel="noreferrer"><img src="./img/nftkey-logo.svg" alt="logo" className="Nftkey-logo" /></a>
        <a href="https://https://nft-watch.vercel.app/#" target="_blank" rel="noreferrer"><Config>About</Config></a>
        <img src="../img/img.png" alt="logo" className="isuck" />
        <br/><br/><span className="bar">___________________________________________</span><br/><br/>

      </Header>
      <h1>{length} collections watched !</h1>
      <br/><br/>
        <Events>
            <EventPrinter />
        </Events>
    </div>
  );
}

export default React.memo(App);
