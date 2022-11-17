import React, {useState, useEffect} from "react"
import { graphql, Link } from "gatsby"
import styled from '@emotion/styled'

const Wrapper = styled.div`
max-width: 900px;
margin: 50px auto;
@media (max-width: 910px) {
       p,h2{
        margin: 10px !important;
       }
}
p {
    a {
        text-decoration: none;
    }
}
.mainImg {
    border-radius: 10px;
}
.buttons {
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
    margin-bottom: 80px;
    button {
        color: black;
        background-color: rgba(0,0,0,0);
        border: none;
        :hover {
            cursor:pointer;
        }
    }
    .arrow {
    height: 16px;
    width: 16px;
    border: solid lightgrey;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transition: .3s;
    :hover {
        border: solid grey;
        border-width: 0 5px 5px 0;
    }
    }
    .left {
    transform: rotate(-225deg);
    -webkit-transform: rotate(-225deg);
    }
    .dot {
        width: 12px;
        height: 12px;
        background-color:lightgrey;
        border-radius: 30px;
        margin: 2px 6px;
        transition: .3s;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        /* border-radius: 2px; */
        :hover {
            background-color:grey;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            
        }
    }
    .active {
        background-color: grey;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        
    }
   
}
`

const BackButton = styled(Link)`
@media (max-width: 910px) {
    padding: 10px;
}
text-decoration: none;
color: black;
font-size: 18px;
text-decoration: underline 0px rgba(0,0,0,0);
transition: .3s;
:hover {
    text-decoration: underline 2px black;
}
`

export default function PropertyPage({data, pageContext}){
    const [activePicture, setActivePicture] = useState(0)
    const [tenancyLink, setTenancyLink] = useState()
    let props = data.palacePropertyDetails.data[pageContext.slug];
    let imageProps = data.palacePropertyImages.data[pageContext.slug];

    useEffect(()=>{
        fetch(`/api/testAPI2`, {
            method: `POST`,
            headers: {
              "content-type": `application/json`,
            },
            body: JSON.stringify({
                agent_name: props.PropertyAgent.PropertyAgentFullName,
                agent_email: props.PropertyAgent.PropertyAgentEmail,
                client_code: props.PropertyAgent.PropertyAgentCode,
                property_code: props.PropertyCode,
                unit: props.PropertyFeatures.PropertyUnit,
                street_name: props.PropertyAddress2,
                postcode: props.PropertyFeatures.PropertyPostCode
            })
          })
        .then(res => res.json())
        .then(body => {
          console.log(`response from API:`, body);
          setTenancyLink(body)
        })
    },[])

    console.log(data);
    console.log(pageContext)

    return(
        <Wrapper>
            <BackButton to="/">Back to Properties</BackButton>
            <img src={imageProps[activePicture].PropertyImageURL}></img>
            <div className="buttons">
                <button onClick={() => {if(activePicture>0){setActivePicture(activePicture-1)}else {setActivePicture(imageProps.length-1)}}}><span className="arrow left"/></button>
                {imageProps.map((X,i) => 
                    <button onClick={() => {setActivePicture(i)}} className={activePicture == i ? "dot active" : "dot"}/>
                )}
                <button onClick={() => {if(activePicture<imageProps.length-1){setActivePicture(activePicture+1)} else {setActivePicture(0)}}}><span className="arrow"/></button>
            </div>
            <h2>{props.PropertyFeatures.PropertyHeader}</h2>
            <p>Location: {props.PropertyAddress1+" "+props.PropertyAddress2+" "+props.PropertyAddress3+" "+props.PropertyAddress4}</p>
            <p>Rent Amount: ${props.PropertyRentAmount} Per {props.PropertyRentalPeriod}</p>
            <p>Date Available: {props.PropertyDateAvailable}</p>
            <p>{props.PropertyFeatures.PropertyAdvertText}</p>
            {tenancyLink? 
            <p>Apply for Tenancy: <a href={tenancyLink.redirect}>{tenancyLink.redirect}</a></p>
            : <p></p>
            }
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
                PropertyChangeCode
                PropertyCode
                PropertyCodeGlobal
                PropertyDateAvailable
                PropertyGrid
                PropertyManagementType
                PropertyName
                PropertyOwnerCode
                PropertyRentAmount
                PropertyRentalPeriod
                PropertySortCode
                PropertyStatus
                PropertyUnit
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
                    PropertyNewConstruction
                    PropertyParking
                    PropertyPetsAllowed
                    PropertyPostCode
                    PropertyPublishAddress
                    PropertyPublishEntry
                    PropertySmokersAllowed
                    PropertyStories
                    PropertyVirtualTourURL
                    PropertyWebLinkURL
                    PropertyYearBuilt
                }
                PropertyAgent {
                    PropertyAgentCode
                    PropertyAgentEmail1
                    PropertyAgentFullName
                }
            }
        }
        palacePropertyImages {
            data {
                PropertyImageURL
            }
        }
    }
`
