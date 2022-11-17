import fetch from "node-fetch"
const crypto = require('crypto')

export default async (req, res) => {
    var api_public_key = process.env.TPS_KEY;
    var api_secret = process.env.TPS_SECRET
    let api_url = "https://www.tpsportal.co.nz/api/v1/tenancy_application/create_property"
    var api_date = new Date().toISOString();
    console.log("reqdata: ",req.body)
    let testapi_body = JSON.stringify({
        client_code:"5866",
        property_code: "ABC123",
        agent_name: "Bob Testing",
        agent_email: "bob@testing.com",
        unit: "1",
        street_number: "123",
        street_name: "Testing Avenue",
        suburb: "Testingburb",
        city: "Testingville",
        postcode: "1234"
    })
    // let api_body;
    // if (req.body){
    //     api_body = JSON.stringify({
    //         client_code: req.body.client_code,
    //         property_code: req.body.property_code,
    //         agent_name: req.body.agent_name,
    //         agent_email: req.body.agent_email,
    //         unit: req.body.unit,
    //         street_number: req.body.number,
    //         street_name: req.body.street_name,
    //         suburb: req.body.suburb,
    //         city: req.body.city,
    //         postcode: req.body.postcode
    //     })
    // }
    

function sign(endpoint, key, secret, date, body) {
    const encoded = new
    Buffer([endpoint,body,date].join('\n')).toString('base64');
    return crypto
    .createHash('sha256')
    .update(encoded + '+' + secret, 'utf8')
    .digest()
    .toString('hex');
}

    var signature = sign(api_url,api_public_key,api_secret,api_date,testapi_body) 
    const options = {
        method: 'post', 
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-DATE': api_date,
            'X-API-KEY': api_public_key,
            'X-API-SIGNATURE': signature
        },
        body: testapi_body
    }
    try{
        console.log("are we getting here?")
        console.log(api_date, api_public_key,)
        try {
           const tp = await fetch(api_url, options);
           const result = await tp.json()
           console.log(result)
           res.status(200).json(result)               

        } catch(error){
            console.log(error)
        }
        // const data = await fetch(url, options)
        console.log("are we getting here?w2")
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem updating field contact`, error);
        return res.status(500).json(error)
  }
}