const fetch = (...args) =>
import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
  });

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {

  // get data from Palace API at build time
  var username = process.env.MANOR_USERNAME;
  var password = process.env.MANOR_PASSWORD;
  var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');  
  const url = `https://api.getpalace.com/Service.svc/RestService/v2AvailableProperties/JSON`;  
  const options = {
  method: 'GET', 
      headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'Authorization': auth
      }
  }
  const result = await fetch(url, options)
  const response = await result.json()
//   let propertyImageUrls = []
//   response.forEach(property => {
//       propertyImageUrls.push(`https://api.getpalace.com/Service.svc/RestService/v2AvailablePropertyImagesURL/JSON/${property.PropertyCode}`)
//   });

  let allData = [];
  const allPropertyImages = await Promise.all(response.map(async (response,i) => {
      let url = `https://api.getpalace.com/Service.svc/RestService/v2AvailablePropertyImagesURL/JSON/${response.PropertyCode}`
      const resp = await fetch(url, options);
      const imageData = await resp.json()
      imageData.push({"propertyCode" : response.PropertyCode})
      allData.push(imageData)
  }))
  console.log(allData)
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    data: response,
    // required fields
    id: `palacePropertyDetails`,
    parent: null,
    children: [],
    internal: {
      type: `palacePropertyDetails`,
      contentDigest: createContentDigest(response),
    },
  })
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    data: allData,
    // required fields
    id: `palacePropertyImages`,
    parent: null,
    children: [],
    internal: {
      type: `palacePropertyImages`,
      contentDigest: createContentDigest(allData),
    },
  })
}

// exports.createResolvers = ({ createResolvers }) => {
//     const resolvers = {
//       data: {
//         ID: {
//           type: "palaceProperties",
//           resolve(source, args, context, info) {
//             return context.nodeModel.getNodeById({
//               id: source.PropertyCode,
//               type: "palaceProperties",
//             })
//           },
//         },
//       },
//     }
//     createResolvers(resolvers)
//   }


exports.createPages = async ({actions: {createPage}, graphql}) => {
    const data = await graphql(
        `
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
                    propertyCode
                }
            }
        }
        `
    )
    if (data.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    data.data.palacePropertyDetails.data.forEach((item, i) => {
        createPage({
            path: item.PropertyAddress1+item.PropertyAddress2,
            component: require.resolve("./src/templates/no_data.js"),
            context: {slug: i}
        })
    })
}