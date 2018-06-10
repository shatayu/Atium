let axios = require("axios");
let CitationPage = require("./CitationPage.js");
let LoginPage = require("./LoginPage.js");
let MainPage = require("./MainPage.js");
let ProjectView = require("./ProjectView.js");
let Settings = require("./Settings.js");

async function test() {
    let request = await axios.get("https://httpbin.org/get");
    console.log(request);
    return request;
}

console.log("website");