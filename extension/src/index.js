let summary = require("./text/summary")
let url = require("./chrome/url");
let links = require("./text/links");

async function main() {
    let currentTab = await url.getCurrentURL();
    // console.log(currentTab);
    // console.log(await summary.getSMMRYData(currentTab));
    console.log(await links.getRelatedLinks("memes"));
}

main();