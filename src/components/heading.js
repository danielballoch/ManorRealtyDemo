import React from "react"
import ManorLogoSmall from "../images/ManorLogoSmall.png"
import styled from "@emotion/styled"
import Background from "../images/ManorRentalsBG.jpg"

const Wrapper = styled.div`
display: flex; 
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
padding-top: 8em;
padding-bottom: 6em;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background});
background-position: 0px 0px, 50% 50%;
filter: grayscale(100%);
background-size: auto, cover;
img {
    width: 30px;
    margin: 0 20px;
}
.subtitle {
    margin: .67em 0;
    font-family: Montserrat, sans-serif;
    color: #0d0d0d;
    font-size: 5em;
    line-height: 1.158em;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: white;
    text-align: center;
    @media (max-width: 765px){
        font-size: 48px;
    }
    @media (max-width: 485px){
        font-size: 3em;
    }
}
.subtitle-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
}
.subtitle-line {
    width: 140px;
    background-color: #fff;
    max-width: 140px;
    min-height: 2px;
    @media (max-width: 765px){
        max-width: 100px;
    }
    @media (max-width: 485px){
        max-width: 80px;
    }
}
`

export default function Header(){
    return(
        <Wrapper>
            <div className="subtitle-container">
                <div className="subtitle-line"/>
                <img src={ManorLogoSmall}/>
                <div className="subtitle-line"/>
            </div>
            <h1 className="subtitle">RENTAL LISTINGS</h1>
        </Wrapper>
    )
}