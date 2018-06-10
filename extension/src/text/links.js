let https = require("https");

function parseResult(body) {
    let result = [];
    let links = body.webPages.value;
    let numberOfLinks = 5;

    for (let i = 0; i < numberOfLinks; i++) {
        result.push(links[i]);
    }

    return result;
}

export async function getRelatedLinks(search) {
    let host = 'api.cognitive.microsoft.com';
    let path = '/bing/v7.0/search';

    let term = 'Microsoft Cognitive Services';
    let subscriptionKey = '6305003fe97145e780050ca36c54698e';

    let result = new Promise((resolve, reject) => {
        let request_params = {
            method : 'GET',
            hostname : host,
            path : path + '?q=' + encodeURIComponent(search),
            headers : {
                'Ocp-Apim-Subscription-Key' : subscriptionKey,
            }
        };
    
        let req = https.request(request_params, function (response) {
            let body = '';
            response.on('data', function (d) {
                body += d;
            });
            response.on('end', function () {
                body = JSON.stringify(JSON.parse(body), null, '  ');
                resolve(parseResult(JSON.parse(body)));
            });
            response.on('error', function (e) {
                reject(e.message);
            });
        });
        req.end();
    })
   
    return await result;
}