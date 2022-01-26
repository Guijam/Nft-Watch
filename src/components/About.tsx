import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  //flex-direction: column;
  //margin-right: 5em;
  //margin-left: 5em;
  //margin-top: 16px;
  //width: 80%;
  padding-left: 3em;
  padding-right: 3em;
  background-color: rgba(65, 19, 19, 0.85);
  border-radius: 25px;
  padding-bottom: 24px;
`

const Chitchat = styled.div`
  font-family: Ebrima,monospace;
  margin-top: unset;
`

const HiddenLink = styled.a`
  color: rgb(167, 211, 209);
  text-decoration: none;
`

const Me = styled.span`
  font-family: Jokerman,cursive;
  font-size: xxx-large;
`

const LightSpan = styled.span`
  font-family: "Times New Roman",cursive;
  font-size: smaller;
`

const About: React.FC = () => {

    return (
        <Wrapper>
            <h2>About</h2>
            <Chitchat>
                _____________________________<br/><br/>
                <strong>NFT-Watch</strong> is a marketplace listener designed to help NFT buyers buy, sellers sell, marketplaces market-place, NFTs travel here and there,
                and in general make everyone happy &lt;3. <br/><br/>
                It has been developped thanks to the open-sourcing of the <a href="https://paintswap.live">paintswap.live</a> listener and PS marketplace libraries.
                Huge thanks for the Paintswap team for that !<br/><br/>
                For anything you would like to throw at me, whether its suggestions, bug-reports, little stones, silly alert sounds, proposals or hugs, feel free to reach me on
                my <a href="https://twitter.com/MrChoupinou">Twitter</a> or <a href="https://discordapp.com/users/346580937649160192">Discord</a> accounts !
                <br/>-----------------------<br/>
                <strong>Upcoming</strong><br/>
                <ul>
                    <li>Wallets watching, to enjoy the sweet sound of your sales !</li>
                    <li>Collection blacklisting, because you care about everything, except maybe for those weird and
                    useless <HiddenLink href="https://paintswap.finance/marketplace/collections/0x4d7531a9ab03454e2812ce78872e011ccc49cba9">bags of air</HiddenLink>...</li>
                    <li>Metamask integration, or at least some way to save your settings...</li>
                    <li>Featured collections, to have a look at something else than those damn sheeps and robots...</li>
                    <li>Coffee-making, you should get some NFT-mug though...</li>
                    <li>And more ! Probably. Some day...</li>
                </ul><br/>
                <Me>- Choupinette -</Me>
                <br/>______________________<br/><br/>
                <LightSpan>Donation address :
                    0xcb65e182A9f298De0BDf97D25a3Aa840CAD7E267</LightSpan>
            </Chitchat>
        </Wrapper>
    )

}

export default About;