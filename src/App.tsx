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
// //create your forceUpdate hook
// function useForceUpdate(){
//     const [value, setValue] = useState(0); // integer state
//     console.log(value)
//     return () => setValue(value => value + 1); // update the state to force render
// }


const App: React.FC = () => {

    // const forceUpdate = useForceUpdate();

    const [collections, setCollections] = useState([])
    const [sales, setSales] = useState([])

    const [collectionsWatched, setCollectionsWatched] = useState([] as string[])
    const [collectionsIgnored, setCollectionsIgnored] = useState([] as string[])

    const [settings, setSettings] = useState(false)
    const [about, setAbout] = useState(false)

    const [wallets, setWallets] = useState([] as string[])

    const [length, setLength] = useState("...")

    // const [ring,setRing]=useState()
    const [ringtone,setRingtone] = useState("f")
    // let ringtone = "f";
    // const setRingtone = (r:string) => {
    //   ringtone=r;
    // }
    // const [updateApp, setUpdateApp] = useState(     (cw: string[],     ci: string[],     w: string[], r:string)=>void)


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
        };
        getCols();
        getSales();


    }, []);

    const updateApp = (cw:string[], ci:string[], w:string[],r:string) => { // the callback.
        console.log('beforecallback')
        console.log(r,ringtone)
        setCollectionsWatched(cw)
        setCollectionsIgnored(ci)
        setWallets(w)
        setRingtone(r)

        console.log('aftercallback')
        console.log(r, ringtone)
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
                {/*<a href="" target="_blank" rel="noreferrer">*/}
                <img src="./img/nftkey-logo.svg" alt="logo" className="Nftkey-logo" />
                {/*</a>*/}
                <span onClick={toggleAbout}><AboutLink >About</AboutLink></span>
                <img src="../img/img.png" alt="logo" className="isuck" />
                <br/><br/><span className="bar">___________________________________________</span>

            </Header>
            <SectionSettings show={settings}>
                <Settings cols={collections} colW={collectionsWatched} colI={collectionsIgnored} wallets={wallets} ringtone={ringtone} callbackF={updateApp} setr={setRingtone}/>
            </SectionSettings>
            <SectionAbout show={about}>
                <About />
            </SectionAbout>
            <br/>
            <h1>{length} collections watched !</h1>
            <br/><br/>
            <Events>
                <EventPrinter cols={collections} colW={collectionsWatched} colI={collectionsIgnored} wallets={wallets} sales={sales} ringtone={ringtone} />
            </Events>
        </div>
    );
}

export default App;
