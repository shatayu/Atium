let thenChrome = require("then-chrome");

export async function getCurrentURL() {
    let result = location.href;

    console.log(result);

    return result;
    /*
    let result = thenChrome.tabs.query({active: true, currentWindow: true});
    console.log(result);
    let query = await result;
    return query[0].url;
    */
    // , function(tabs) {

    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     var activeTab = tabs[0];
    //     var activeTabId = activeTab.id; // or do whatever you need
    //     console.log(activeTab);
    //  });
}