let axios = require("axios");

async function test() {
    let request = await axios.get("https://httpbin.org/get");
    console.log(request);
    return request;
}

test();
console.log("test");