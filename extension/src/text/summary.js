let axios = require("axios");

export async function getSMMRYData(url) {
    let key = "FF4FA19D81";
    let keywordCount = 3;
    
    let APIUrl = "https://api.smmry.com/&SM_API_KEY=" + key;
    APIUrl += "&SM_KEYWORD_COUNT=" + keywordCount; 
    APIUrl += "&SM_URL=" + url;

    return await axios.get(APIUrl);
}