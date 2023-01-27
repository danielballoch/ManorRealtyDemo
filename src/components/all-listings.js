import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby';
import BedroomIcon from "../images/ManorBedroomIcon.png"
import BathroomIcon from "../images/ManorBathroomIcon.png"
import GarageIcon from "../images/ManorGarageIcon.png"
import HoverLogo from '../images/ManorHoverLogo.png'

const Wrapper = styled.div`
max-width: 80vw;
margin :auto;
position: relative;
z-index: 3;
padding-top: 6em;
padding-bottom: 8em;
.Line {
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    max-width: 140px;
    width: 100%;
    min-height: 2px;
    background-color: #0f0f0f;
    margin-bottom: 42px;
}
h1 {
    margin-bottom: 50px;
    margin-top: 20px;
    color: #0f0f0f;
    text-align: left;
    font-size: 4em;
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    font-family: Montserrat, sans-serif;
    line-height: 1.158em;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    @media (min-width: 1920px){
        font-size: 5em;
    }
    @media (max-width: 767px){
        font-size: 40px;
    }
    @media (max-width: 479px){
    width: 100%;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 2em;
    }
}
.img-container {
    display: grid;
    grid-template-areas: "main";
    height: 20em;
    img {
        grid-area: main;
        height: 20em;
        width: 100%;
        object-fit: cover;
    }
    .logo-div {
        z-index: 5;
        background-color: rgba(0, 0, 0, 0.6);
        grid-area: main;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: .3s;
    }
    .logo {
        z-index: 10;
        position: absolute;
        justify-self: center;
        align-self: center;
        width: 82px;
        height: 84px;
        grid-area: main;
        opacity: 0;
        transition: .3s;
        
    }
}
.grid-layout {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 1px none #cfcfcf;
    border-bottom: 1px none #cfcfcf;
    grid-template-rows: auto auto;
    box-sizing: border-box;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    @media screen and (max-width: 479px){
        grid-row-gap: 20px;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        -ms-grid-rows: auto auto auto auto auto auto;
        grid-template-rows: auto auto auto auto auto auto;
    }
    .card {
        padding: 0px;
        border-style: none;
        border-width: 1px;
        border-color: #eaeaea;
        background-color: #fff;
        box-shadow: 5px 5px 15px -7px rgba(0, 0, 0, 0.3);
        color: #333;
        text-decoration: none;
        :hover {
            .logo, .logo-div  {
                opacity: 1;
            }
        }
        .div-text {
            padding: 25px 20px 25px 25px;
        }
        h3 {
            height: 53.671875px;
            margin-top: 10px;
            margin-bottom: 10px;
            font-family: Montserrat, sans-serif;
            font-size: 1.5em;
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: none;
            color: #0d0d0d;
            line-height: 1.278em;
        }
        .heading-line {
            margin-bottom: 15px;
            background-color: #cfcfcf;
            max-width: 100px;
            width: 100%;
            min-height: 2px;
            color: #333;
        }
        .price-txt {
            padding-top: 0px;
            padding-bottom: 10px;
            font-family: Lato, sans-serif;
            color: #1f1f1f;
            font-size: 1.5em;
            font-weight: 300;
        }
        .grid-holder {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            padding-top: 10px;
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }
        .icon-grid {
            display: -ms-grid;
            display: grid;
            padding-top: 10px;
            -webkit-box-pack: start;
            -webkit-justify-content: start;
            -ms-flex-pack: start;
            justify-content: start;
            justify-items: start;
            grid-auto-columns: 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
            -ms-grid-columns: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            -ms-grid-rows: auto;
            grid-template-rows: auto;
            .block {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: start;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-box-align: end;
                -webkit-align-items: flex-end;
                -ms-flex-align: end;
                align-items: flex-end;
            }
            img {
                width: 1.8em;
                opacity: 0.8;
                -webkit-filter: invert(100%);
                filter: invert(100%);
            }
            .feature-text {
                padding-left: 1em;
                font-family: Lato, sans-serif;
                font-size: 1.5em;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        }
    }
}
`

export default function AllListings({data, propertyOrder}){
    return(
        <Wrapper>
            <div className='Line'/>
            <h1>Current Listings</h1>
            <div className='grid-layout'>
            {data.palacePropertyDetails.data.map((property, i) => (
                        <Link to={"/"+property.PropertyAddress1+property.PropertyAddress2} className="card" key={"Property " + i}>
                            <div className="img-container">
                                <img src={data.palacePropertyImages.data[propertyOrder[i]][0].PropertyImageURL}/>
                                <img className='logo' src={HoverLogo}/>
                                <div className='logo-div'/>
                            </div>
                            <div className='div-text'>
                                <h3>{property.PropertyAddress1} {property.PropertyAddress2} {property.PropertyAddress3}</h3>
                                <div className='heading-line'/>
                                <div className='price-txt'>${property.PropertyRentAmount} Per {property.PropertyRentalPeriod}</div>
                                <div className='grid-holder'>
                                    <div className='icon-grid'>
                                        <div className='block'><img src={BedroomIcon}/><div className='feature-text'>{property.PropertyFeatures.PropertyBedroomsNo}</div></div>
                                        <div className='block'><img src={BathroomIcon}/><div className='feature-text'>{property.PropertyFeatures.PropertyBathroomsNo}</div></div>
                                        {property.PropertyFeatures.PropertyCarsNo > 0 ? 
                                        <div className='block'><img src={GarageIcon}/><div className='feature-text'>{property.PropertyFeatures.PropertyCarsNo}</div></div>
                                        : null
                                        }
                                        
                                    </div>
                                </div>

                            </div>
                        </Link>

                ))}
            </div>

        </Wrapper>
    )
}