let path = require("path");

module.exports = {
    entry: {
        main: './src/index.js',
        content: "./src/content.js",
        popup: "./src/popup.js"
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
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