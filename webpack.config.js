const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"
            },
            {
                loader: "ts-loader"
            }]
        },
        {
            test: /\.s?css$/i,
            use: [
                {loader: 'style-loader'}, 
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[name]__[local]--[hash:base64:5]"
                        }
                    }
                },
                {loader: 'sass-loader'}]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
};
