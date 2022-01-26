import React, {useEffect, useState} from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';
import Settings from "./components/Settings";
import styled from "styled-components";
import About from "./components/About";

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

const SectionSettings = styled.span<{show:boolean}>`
  display: ${(props)=>props.show ? 'auto' : 'none'};
`

const SectionAbout = styled.span<{show:boolean}>`
  display: ${(props)=>props.show ? 'auto' : 'none'};
`



const SettingsLink = styled.a`
  
  color: #ffd034;
  font-size: xx-large;
  background-color: rgba(40, 59, 28, 0.63);;
  border-radius: 20px;
  padding: 16px;
  text-decoration: underline;
  cursor: pointer;
`

const AboutLink = styled.a`
  color: #ffd034;
  font-size: xx-large;
  background-color: rgba(40, 59, 28, 0.63);;
  border-radius: 20px;
  padding: 16px;
  text-decoration: underline;
  cursor: pointer;
`



const App: React.FC = (props) => {

    const [collections, setCollections] = useState([])
    const [sales, setSales] = useState([])
    const [collectionsWatched, setCollectionsWatched] = useState([] as string[])
    const [collectionsIgnored, setCollectionsIgnored] = useState([] as string[])
    const [settings, setSettings] = useState(false)
    const [about, setAbout] = useState(false)
    const [wallets, setWallets] = useState([] as string[])
    const [length, setLength] = useState("...")
    const [sLength, setSLength] = useState("...")


  useEffect(() => {
    const getCols = async () => {
    const res = await fetch('https://api.paintswap.finance/v2/collections');
    const cols = await res.json();
      setCollections(cols.collections);
      setLength(cols.collections.length)
    };
      const getSales = async () => {
          const res = await fetch('https://api.paintswap.finance/v2/sales?numToFetch=1000&sold=false&includeActive=true');
          const sales = await res.json();
          setSales(sales.sales);
          setSLength(sales.sales.length)
      };
    getCols();
    getSales();

  }, []);



    const updateApp = (cw:string[], ci:string[], w:string[]) => { // the callback.
        setCollectionsWatched(cw)
        setCollectionsIgnored(ci)
        setWallets(w)
    };


    const toggleSettings = () => {
        setSettings(!settings)
    }
    const toggleAbout = () => {
        setAbout(!about)
    }


  return (
    <div className="App">
      <Header className="App-header">
        <img src="./img/logo.png" alt="logo" className="App-logo" />
        <span onClick={toggleSettings}> <SettingsLink>Settings</SettingsLink></span>
        <a href="https://paintswap.finance" target="_blank" rel="noreferrer"><img src="./img/ps-logo.png" alt="logo" className="Ps-logo" /></a>
        <span className="Title">
          ♥ NFT-Watch ♥
        </span>
          <a href="https://nftkey.app/" target="_blank" rel="noreferrer"><img src="./img/nftkey-logo.svg" alt="logo" className="Nftkey-logo" /></a>
        <span onClick={toggleAbout}><AboutLink >About</AboutLink></span>
        <img src="../img/img.png" alt="logo" className="isuck" />
        <br/><br/><span className="bar">___________________________________________</span>

      </Header>
        <SectionSettings show={settings}>
            <Settings cols={collections} colW={collectionsWatched} colI={collectionsIgnored} wallets={wallets} callbackF={updateApp} />
        </SectionSettings>
        <SectionAbout show={about}>
            <About />
        </SectionAbout>
        <br/>
      <h1>{length} collections & {sLength} sales watched !</h1>
      <br/><br/>
        <Events>
            <EventPrinter cols={collections} sales={sales}/>
        </Events>
    </div>
  );
}

export default React.memo(App);
