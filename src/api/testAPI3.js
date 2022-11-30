import fetch from "node-fetch"


export default async (req, res) => {
    var key = process.env.BOXDICE_KEY;

    const url1 = `https://manor-realty.boxdice.com.au/website_api/sales_listings`;  
    const options = {
    method: 'GET', 
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Authorization': "api-key token="+key
        }
    }
    try{
        const contacts = await fetch(url1, options)
        const response = await contacts.json()
        console.log(response)
        return res.status(200).json(response)
    } catch(err) {
        const error = JSON.stringify(err)
        console.log(err)
        console.log(`Problem updating field contact`, error);
        return res.status(500).json(error)
  }
}