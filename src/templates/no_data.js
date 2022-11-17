import React from "react"
import { graphql } from "gatsby"

export default function PropertyPage({data, pageContext}){
    console.log(data);
    console.log(pageContext)
    let props = data.palacePropertyDetails.data[pageContext.slug];
    return(
        <div>
            <img src={data.palacePropertyImages.data[pageContext.slug][0].PropertyImageURL}></img>
            <h2>{props.PropertyFeatures.PropertyHeader}</h2>
            <p>Location: {props.PropertyAddress1+" "+props.PropertyAddress2+" "+props.PropertyAddress3+" "+props.PropertyAddress4}</p>
            <p>Rent Amount: ${props.PropertyRentAmount} Per {props.PropertyRentalPeriod}</p>
            <p>Date Available: {props.PropertyDateAvailable}</p>
            <p>{props.PropertyFeatures.PropertyAdvertText}</p>
        </div>
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
            }
        }
        palacePropertyImages {
            data {
                PropertyImageURL
            }
        }
    }
`
