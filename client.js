const fetch = require("node-fetch");
const url = "http://localhost:3000/"

async function get(url) {
    console.log('getting ' + url)
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return json
}

get(url+'courses')