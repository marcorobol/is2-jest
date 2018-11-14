const fetch = require("node-fetch");
const url = "http://localhost:3000/courses"

test('works with get', async () => {
    expect.assertions(2)
    var response = await fetch(url)
    expect(response.status).toEqual(200)
    var json = await response.json()
    console.log(json)
    expect(json[0].id).toBeDefined();
})