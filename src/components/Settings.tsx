import React, {useState} from "react";
import styled from "styled-components";
import {Collection} from "../api/nftWatcherTypes";

const Wrapper = styled.div`
  position: absolute;
  left: 4em;
  right: 4em;
  flex-direction: column;
  margin-top: 16px;
  background-color: rgba(51, 41, 46, 0.89);
  border-radius: 25px;
  padding-bottom: 24px;
`

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 60px;
  width: 100%;
  padding:1em;

`

const ColsWatcher = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.89);
  text-align: left;
  padding: 30px;
  border-radius: 25px;
`

const ColsWatched = styled.ul`
  display: block;
  background-color: rgba(0, 0, 0, 0.89);
  text-align: left;
  padding: 30px;
  border-radius: 25px;
`
const ColWatched = styled.li`
  display: block;
  background-color: rgb(59, 59, 53);
  text-align: left;
  padding: 10px;
  border-radius: 15px;
`

const DelButton = styled.button`
  float: right;
`
const ColInput = styled.input`
  margin-left : 1em;
  margin-right : 1em;
`

const Tiltle = styled.h2`
  margin-top: unset;
  margin-bottom: 1em;
`

const LittleSpan = styled.span`
    display: block;
  font-style: italic;
    font-size: small;
    text-align: center;
`

interface Props {
    cols: Collection[],
    colW: string[],
    colI: string[],
    wallets: string[],
    ringtone:string,
    callbackF:(     cw: string[],     ci: string[],     w: string[], r:string)=>void,
    setr:(s:string)=>void
}

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    console.log(value)
    return () => setValue(value => value + 1); // update the state to force render
}

const Settings: React.FC<Props> = (props) => {

    const [coladd, setColadd] = useState("")

    const forceUpdate = useForceUpdate();

    function colName(address: string, i:number) {
        let colsfil = props.cols.filter(
            function (data: Collection) {
                return data.id.toLowerCase() === address.toLowerCase() ? data : null
            }
        )
        return colsfil.length > 0 ? colsfil[0].name : address+(" - Unknown collection "+i)
    }


    const changeColadd = (event: { target: { value: string; }; }) => {
        console.log(event.target.value)
        console.log(coladd)
        console.log(props.colW)
        setColadd(event.target.value);
    }
    const changeRingTone = (event: { target: { value: string; }; }) => {
        console.log(event.target.value)
        console.log(coladd)
        props.callbackF(props.colW,props.colI,props.wallets,event.target.value)
    }


    const addColWatched = () => {
        props.colW.push(coladd)
        setColadd("")
    }


    const delColWatched = (i:number) => {
        props.colW.splice(i,1)
        forceUpdate()
    }

    return (
        <Wrapper>
            <Section id="filter">
                <ColsWatcher id="watched">
                    <Tiltle>Watched</Tiltle>
                    Add collection :
                    <ColInput id="coladd" type="text" value={coladd} onChange={changeColadd}/>
                    <button className="add" type="button" onClick={addColWatched}> Add </button>
                    <br/><LittleSpan>(Input the exact address. Caution : reset on reload !)</LittleSpan>
                    <ColsWatched id="watched-cols">
                        {props.colW.map((item: string, i:number)=>(
                            <ColWatched className="col" key={i}>
                                <span>{colName(item, i)}</span>
                                <DelButton className="del" type="button" onClick={()=>delColWatched(i)}>[X]</DelButton>
                            </ColWatched>
                        ))}
                    </ColsWatched>
                    {/*<select*/}
                    {/*    value={ringtone}*/}
                    {/*    onChange={changeRingTone}*/}
                    {/*>*/}
                    {/*    <option value="./sound/juntos.mp3">Juntos</option>*/}
                    {/*</select>*/}
                    <select onChange={changeRingTone}>
                        <option value=""> - </option>
                        <option value="./sound/juntos.mp3">Juntos</option>
                        <option value="./sound/girl-hey-ringtone.mp3">Hey !</option>
                        <option value="./sound/oh-man.mp3">Oh man !</option>
                        <option value="./sound/achievement-message-tone.mp3">Achievement !</option>
                        <option value="./sound/fingerlicking-message-tone.mp3">Fingerlick</option>
                        <option value="./sound/hmm-girl-tone.mp3">Hmm ?</option>
                        <option value="./sound/pristine-609.mp3">Pristine</option>
                    </select>
                </ColsWatcher>
                <ColsWatched id="watched-address">
                    <Tiltle>Ignored</Tiltle>

                </ColsWatched>
                <ColsWatched id="watched-address">
                    <Tiltle>Wallets</Tiltle>

                </ColsWatched>
            </Section>

            <Section id="alerts">

            </Section>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </Wrapper>
    )

}

export default Settings;