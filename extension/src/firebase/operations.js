import { database } from "firebase";

let firebase = require("firebase");
let config = {
    apiKey: "AIzaSyADlbe5mZ62QFaLhPSwnC_ksGTGhBqTyjo",
    authDomain: "atium-e4df2.firebaseapp.com",
    databaseURL: "https://atium-e4df2.firebaseio.com",
    projectId: "atium-e4df2",
    storageBucket: "atium-e4df2.appspot.com",
    messagingSenderId: "254101329920"
}

firebase.initializeApp(config);
let db = firebase.database();

export function addSite(userID, email, project, site) {
    db.ref(userID + "/" + Date.now()).update({
        project: project,
        summary: site.summary,
        title: site.title,
        url: site.url,
        user: email
    })
}