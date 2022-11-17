const fetch = (...args) =>
import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
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
  const resultData = await result.json()
//   console.log(resultData)
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    data: resultData,
    // required fields
    id: `palaceProperties`,
    parent: null,
    children: [],
    internal: {
      type: `palaceProperties`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

exports.createPages = async ({actions: {createPage}, graphql}) => {
    const data = await graphql(
        `
        {
            palaceProperties{
                data {
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
                }
            }       

        }
        `
    )
    if (data.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    data.data.palaceProperties.data.forEach((item, i) => {
        createPage({
            path: "/page"+ i,
            component: require.resolve("./src/templates/no_data.js"),
        })
    })
    


}