let summary = require("./text/summary")
let url = require("./chrome/url");

async function main() {
    let currentTab = await url.getCurrentURL();
    console.log(currentTab);
    console.log(await summary.getSMMRYData(currentTab));
}

main();