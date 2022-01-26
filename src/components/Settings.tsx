import React, {useState} from "react";
import styled from "styled-components";
import {Collection} from "../api/nftWatcherTypes";

const Wrapper = styled.div`
      position: absolute;
      left: 4em;
      right: 4em;
      flex-direction: column;
      margin-top: 16px;
      //width: 80%;
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

interface Props {
    cols: Collection[],
    colW: string[],
    colI: string[],
    wallets: string[],
    callbackF:(     cw: string[],     ci: string[],     w: string[])=>void
}

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    console.log(value)
    return () => setValue(value => value + 1); // update the state to force render
}

const Settings: React.FC<Props> = ({cols,colW, colI, wallets, callbackF}) => {

    const [coladd, setColadd] = useState("")

    const forceUpdate = useForceUpdate();

    function colName(address: string, i:number) {
        let colsfil = cols.filter(
            function (data: Collection) {
                return data.id.toLowerCase() === address.toLowerCase() ? data : null
            }
        )
        return colsfil.length > 0 ? colsfil[0].name : address+(" - Unknown collection "+i)
    }


    const changeColadd = (event: { target: { value: string; }; }) => {
        console.log(event.target.value)
        console.log(coladd)
        console.log(colW)
        setColadd(event.target.value);

    }

    const addColWatched = () => {
        colW.push(coladd)
        setColadd("")
    }


    const delColWatched = (i:number) => {
        colW.splice(i,1)
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
                    <ColsWatched id="watched-cols">
                        {colW.map((item: string, i:number)=>(
                            <ColWatched className="col" key={i}>
                                <span>{colName(item, i)}</span>
                                <DelButton className="del" type="button" onClick={()=>delColWatched(i)}>[X]</DelButton>
                            </ColWatched>
                        ))}
                    </ColsWatched>
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