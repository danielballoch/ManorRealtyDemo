import React,{ useState, useEffect } from "react"
import styled from '@emotion/styled';
import { Link } from 'gatsby'
import Logo from "../images/ManorNavLogo.png"


const Nav = styled.div`
.NavBar{
    display: grid;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 0.25fr 1fr 0.25fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
    z-index: 10;
    position: fixed;
    min-height: 4.5rem;
    padding: 20px 5% 15px;
    color: white;
    font-size: 14px;
    transition: .3s;
    
}
.Scroll {
    background-color: rgb(15, 15, 15);
}


.logo {
    padding: 0;
    
}
img {
    width: 20em;
    max-width: 100%;
    font-size: 14px;
    line-height: 20px;
    @media (max-width: 1100px){
        min-width: 280px;
    }
}
a {
    display: inline-block;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    font-family: Lato, sans-serif;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    :hover {
        cursor: pointer;
    }
}
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    padding-top: 4px;
    border: solid hsla(0, 0%, 100%, 0.3) 1px;
    border-radius: 24px;
    width: auto;
    max-width: 135.5px;
    height: 46px;
    font-size: 10px;
    line-height: 1.3em;
    text-align: center;
    letter-spacing: 4px;
    :hover {
        border: solid hsla(0, 0%, 100%, 1) 1px;
    }
    @media (max-width: 1100px){
        grid-column: 3;
        justify-self: end;
    }
    @media (max-width: 600px){
        display: none;
    }
}
.menu {
    margin: auto;
    @media (max-width: 1100px){
        display: none;
    }
}
.dropdown {
    margin-top: auto;
    margin-right: 1rem;
    margin-bottom: auto;
}
`

export default function Navbar({dark}){
    const [offset, setOffset] = useState(0);
    const [initial, setInitial] = useState(true);
    const [MenuOpen, setMenuOpen] = useState(false);


        useEffect(() => {
        if (typeof window !== `undefined` && window.onscroll !== offset) {
            window.onscroll = () => {
                setOffset(window.scrollY);
                if (offset <= 50){
                    setInitial(true)
                } else if (offset !== 0 && initial !== false){
                    setInitial(false)
                }
            }
        }
        })
    return(
        <Nav>
            <div className={dark? "NavBar Scroll" : initial? "NavBar" :  "NavBar Scroll"}>
                <Link className="logo" to="/"><img src={Logo}/></Link>
                <div className="menu">
                    <Link to="/property-rentals">PROPERTIES<div className="dropdown"/></Link>
                    <Link>LANDLORDS<div className="dropdown"/></Link>
                    <Link>TENANTS<div className="dropdown"/></Link>
                    <Link>ABOUT<div className="dropdown"/></Link>
                </div>
                <Link className="contact"><div>Contact</div></Link>
            </div>
        </Nav>
    )
}