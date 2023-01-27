import React from 'react';
import styled from "@emotion/styled"
import { Link } from 'gatsby'
import BedroomIcon from "../images/ManorBedroomIcon.png"
import BathroomIcon from "../images/ManorBathroomIcon.png"
import GarageIcon from "../images/ManorGarageIcon.png"


const Wrapper = styled.div`
padding-top: 4em;
max-width: 80vw;
margin: auto;
a {
    text-decoration: none;
    color: #0d0d0d;
}
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
.Line2 {
    margin-top: 2em;
    padding-top: 2em;
    padding-bottom: 2em;
    border-top: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    display: -ms-grid;
    display: grid;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    @media (max-width: 765px){
        grid-template-columns: 1fr;
    }
    .property-info {
        max-width: 440px;
        justify-self: end;
        @media (max-width: 765px){
        justify-self: auto;
        }
    }
    .main-image {
        -ms-grid-column: span 1;
        grid-column-start: span 1;
        -ms-grid-column-span: 1;
        grid-column-end: span 1;
        -ms-grid-row: span 1;
        grid-row-start: span 1;
        -ms-grid-row-span: 1;
        grid-row-end: span 1;
        -ms-grid-row-align: stretch;
        align-self: stretch;
        object-fit: cover;
        width: 50vw;
        @media (max-width: 765px){
            width: 100%;
        }
        img {
            width: 100%;
            /* width: 80vw; */
            -o-object-fit: cover;
            object-fit: cover;
            max-width: 100%;
            vertical-align: middle;
            display: inline-block;
        }
    
}
}
.top-line {
    margin-bottom: 15px;
    background-color: #cfcfcf;
    max-width: 100px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 100px;
    min-height: 2px;
    margin-bottom: 48px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: #0f0f0f;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
}
.divider {
    margin-top: 30px;
    margin-bottom: 40px;
    height: 1px;
    background-color: #cfcfcf;
    box-sizing: border-box;
    color: #0f0f0f;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
}
h1 {
    margin-top: 20px;
    margin-bottom: 0px;
    color: #0f0f0f;
    text-align: left;
    font-size: 4em;
    font-family: Montserrat, sans-serif;
    color: #0d0d0d;
    line-height: 1.158em;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    @media screen and (min-width: 1920px){
        font-size: 5em; 
    }
}
h3 {
    font-family: Montserrat, sans-serif;
    letter-spacing: 0.02em;
    text-transform: none;
    color: #0d0d0d;
    font-size: 36px;
    line-height: 1.278em;
    font-weight: 400;
    margin-bottom: 12px;
    margin-top: 20px;
}
p {
    height: auto;
    font-family: Lato, sans-serif;
    font-size: 1.22em;
    line-height: 1.5;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 10px;
}
.icons{
    display: grid;
    padding-top: 10px;
    -webkit-box-pack: start;
    justify-content: start;
    justify-items: start;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
}
.icon {
    -ms-grid-column: span 1;
    grid-column-start: span 1;
    -ms-grid-column-span: 1;
    grid-column-end: span 1;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
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
    p {
        margin: 0;
        color: #0f0f0f;
        line-height: 20px;
        padding-left: 1em;
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 500;
    }
    img {
        filter: invert(100%);
        width: 1.8em;
        opacity: 0.8;
    }
    
}

`

export default function FeaturedListing({image, propertydata}){
    console.log("featured-listing data: ", propertydata, image)
    return (
        <Wrapper>
            <div className="Line"/>
            <h1>Featured Listings</h1>
            <Link to={"/"+propertydata.PropertyAddress1+propertydata.PropertyAddress2}>
                <div className="Line2">
                    <div className='main-image'>
                        <img src={image[1].PropertyImageURL}/>
                    </div>
                    <div className='property-info'>
                        <div>
                            <div className='top-line'/>
                            <h3>{propertydata.PropertyAddress1} {propertydata.PropertyAddress2}, {propertydata.PropertyAddress3}</h3>
                            <p>{propertydata.PropertyFeatures.PropertyHeader}<br/> Residential {propertydata.PropertyFeatures.PropertyClass}</p>
                            <div className='divider'/>
                        </div>
                        <div className='icons'>
                            <div className='icon'><img src={BedroomIcon}/><p>{propertydata.PropertyFeatures.PropertyBedroomsNo}</p></div>
                            <div className='icon'><img src={BathroomIcon}/><p>{propertydata.PropertyFeatures.PropertyBathroomsNo}</p></div>
                            <div className='icon'><img src={GarageIcon}/><p>{propertydata.PropertyFeatures.PropertyCarsNo}</p></div>
                        </div>
                    </div>
                </div>
            </Link>
        </Wrapper>
    )
}