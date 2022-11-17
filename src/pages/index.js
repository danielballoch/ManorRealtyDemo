import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react";
import styled from '@emotion/styled'

const Wrapper = styled.div`
.heading {
    margin: 20px;
}
.wrap {
    display: flex;
    justify-content: center;
    margin: 10px;
    
}
.card {
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
margin: 10px;
width: 400px;
}
.subtitle {
    font-weight: 500;
}
p {
    padding: 0 20px;
}

`

export default function Index(){
    const [propertyData, setPropertyData] = useState();

    useEffect(()=>{
        fetch(`/api/testAPI`, {
            method: `GET`,
            headers: {
              "content-type": `application/json`,
            },
          })
        .then(res => res.json())
        .then(body => {
          console.log(`response from API:`, body);
          setPropertyData(body)
        })
    },[])

    // useEffect(()=>{
    //     fetch(`/api/testAPI2`, {
    //         method: `POST`,
    //         headers: {
    //           "content-type": `application/json`,
    //         },
    //         body: {
    //             agent_name: {propertyData.},
    //             agent_email: "",
    //             client_code: "",
    //             property_code: "",
    //             unit: "",
    //             street_name: "",
    //             postcode: ""
    //         }
    //       })
    //     .then(res => res.json())
    //     .then(body => {
    //       console.log(`response from API:`, body);
    //       setPropertyData(body)
    //     })
    // },[propertyData])
    
    return(
        <Wrapper>
            <h1 class="heading">Property Data:</h1>
            {propertyData?
            <div className="wrap">
            {propertyData.map((property, i) => (
                <div className="card" key={"Property " + i}>
                    <img src={property[1][0].PropertyImageURL}/>
                    <p className="subtitle">{property[0].PropertyAddress1}, {property[0].PropertyAddress2}, {property[0].PropertyAddress3}, {property.PropertyAddress4}</p>
                    <p>Rent Amount: ${property[0].PropertyRentAmount} per {property[0].PropertyRentalPeriod}</p>
                    <p>{property[0].PropertyFeatures.PropertyAdvertText.slice(0, 125)}</p>
                    <p>Read More...</p>
                </div>
            ))}
            </div>
            :
            <div>
                Loading...
            </div>

            }
        </Wrapper>
    )
}
