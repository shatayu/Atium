let path = require("path");

module.exports = {
    entry: {
        compiledLoginPage: "./src/LoginPage.js",
        compiledSettings: "./src/Settings.js",
        compileProjectView: "./src/ProjectView.js",
        compileMainPage: "./src/MainPage.js",
        compileCitationPage: "./src/CitationPage.js",
    },

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};