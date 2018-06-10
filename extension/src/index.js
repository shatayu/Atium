let summary = require("./text/summary");
let url = require("./chrome/url");
let links = require("./text/links");
let databaseHandling = require("./firebase/operations");

/*
let currentTab = await url.getCurrentURL();
let SMMRYData = await summary.getSMMRYData(currentTab);

let summary = SMMRYData.data.sm_api_content;
let query = ""

for (let i = 0; i < SMMRYData.data.sm_api_keyword_array.length; i++) {
    query += SMMRYData.data.sm_api_keyword_array[i] + " "
}

let links = await links.getRelatedLinks(query);
*/

async function getCurrentLinkData() {
    let currentTab = await url.getCurrentURL();
    let SMMRYData = await summary.getSMMRYData(currentTab);
    let currentTabSummary = SMMRYData.data.sm_api_content;
    let currentTabTitle = SMMRYData.data.sm_api_title;
    let query = ""
    
    for (let i = 0; i < SMMRYData.data.sm_api_keyword_array.length; i++) {
        query += SMMRYData.data.sm_api_keyword_array[i] + " "
    }
    
    let currentTabLinks = await links.getRelatedLinks(query);

    let result = {
        url: currentTab,
        summary: currentTabSummary,
        title: currentTabTitle,
        links: currentTabLinks
    }

    databaseHandling.addSite(Date.now(), "demo@atiumapp.com", "project", result);

    return result;
}

async function main() {
    let currentLink = await getCurrentLinkData();
    console.log(currentLink);
}

main();