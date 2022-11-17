import fetch from "node-fetch"


export default async (req, res) => {
    var username = process.env.MANOR_USERNAME;
    var password = process.env.MANOR_PASSWORD;
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

    const url1 = `https://api.getpalace.com/Service.svc/RestService/v2AvailableProperties/JSON`;  
    const options = {
    method: 'GET', 
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Authorization': auth
        }
    }
    try{
        const contacts = await fetch(url1, options)
        const response = await contacts.json()
        let propertyImageUrls = []
        response.forEach(property => {
            propertyImageUrls.push(`https://api.getpalace.com/Service.svc/RestService/v2AvailablePropertyImagesURL/JSON/${property.PropertyCode}`)
        });

        let allData = [];
        const allPropertyImages = await Promise.all(propertyImageUrls.map(async (url,i) => {
            const resp = await fetch(url, options);
            const data = await resp.json()
            allData.push([response[i], data])
        }))
        return res.status(200).json(allData)
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem updating field contact`, error);
        return res.status(500).json(error)
  }
}