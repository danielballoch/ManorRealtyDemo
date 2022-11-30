import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react";
import styled from '@emotion/styled'


const Wrapper = styled.div`
.heading {
    margin: 20px;
}
.wrap {
    /* flex-direction: column; */
    display: flex;
    /* height: 100vh; */
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px; 
    @media (max-width: 600px) {
        margin-top: 50px;
        flex-direction: column;
        align-items:center;
        .card {
            max-height: 1000px;
        }
        
    }
}
.card {
text-decoration: none!important;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
margin: 10px;
max-width: 400px;
max-height: 569px;
transition: .3s;
.imagecontainer {
  width: 200px;
  height: 200px;
  border: 4px solid black;
  border-radius: 100px;
  overflow: hidden;
}
img {
  width: 400px;
  height: 300px;
  transition: .3s;
  object-fit: cover;
}
:hover {
    img {
        width: 500px;
        height: 302px;
    }
    cursor: pointer;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    p:last-of-type {
        transition: .3s;
        text-decoration: underline 2px rgba(0,0,0,.8);
    }
}
}
.subtitle {
    font-weight: 500;
}
p {
    padding: 0 20px;
    color: black;
}
p:last-of-type {
    text-decoration: underline 0px rgba(0,0,0,0);
}

`
export const Head = () => <title>Manor Realty Demo | Properties page</title>

export default function Index({data}){
    const [propertyData, setPropertyData] = useState();
    console.log(data)
    //need to figure out which palceProperty matches images, create array of objects?
    let propertyOrder = [];
    {data.palacePropertyDetails.data.forEach((property,i) => {
        //foreach to run through and add matchs to MatchImage
        // console.log(property.PropertyCode)
        // console.log(data.palacePropertyImages.data[i][data.palacePropertyImages.data[i].length-1].propertyCode)
        let current = i;
        data.palacePropertyDetails.data.forEach((property,i) => {
            if (data.palacePropertyDetails.data[current].PropertyCode === data.palacePropertyImages.data[i][data.palacePropertyImages.data[i].length-1].propertyCode){
                propertyOrder.push(i)
            }

        })
    });}
    console.log(propertyOrder)
    return(
        <Wrapper>
            <div className="wrap">
            {data.palacePropertyDetails.data.map((property, i) => (
                    <Link to={"/"+property.PropertyAddress1+property.PropertyAddress2} className="card" key={"Property " + i}>
                        <div className="imgcontainer">
                            <img src={data.palacePropertyImages.data[propertyOrder[i]][0].PropertyImageURL}/>
                        </div>
                        <p className="subtitle">{property.PropertyAddress1}, {property.PropertyAddress2}, {property.PropertyAddress3}, {property.PropertyAddress4}</p>
                        <p>Rent Amount: ${property.PropertyRentAmount} per {property.PropertyRentalPeriod}</p>
                        <p>{property.PropertyFeatures.PropertyAdvertText.slice(0, 125)}</p>
                        <p>Read More...</p>
                    </Link>

            ))}
            </div>
        </Wrapper>
    )
}

export const query = graphql`
    query{
        palacePropertyDetails{
            data{
                PropertyAddress1
                PropertyAddress2
                PropertyAddress3
                PropertyAddress4
                PropertyCode
                PropertyDateAvailable
                PropertyName
                PropertyRentAmount
                PropertyRentalPeriod
                PropertyCustomList {
                    PropertyCustomName
                    PropertyCustomValue
                }
                PropertyFeatures {
                    PropertyAdvertText
                    PropertyAmenities
                    PropertyBathroomsNo
                    PropertyBedroomsNo
                    PropertyCarsNo
                    PropertyClass
                    PropertyEnsuitesNo
                    PropertyFeatureDetails
                    PropertyFloorArea
                    PropertyFurnishings
                    PropertyGeographicLocation
                    PropertyHeader
                    PropertyLandAreaHectares
                    PropertyLandAreaMSquared
                }
            }
        }
        palacePropertyImages {
            data {
                PropertyImageURL
                propertyCode
            }
        }
    }
`
