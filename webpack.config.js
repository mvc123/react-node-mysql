/**
 * Created by u0036408 on 6/02/2018.
 */
const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './app.js',
        ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
    },
    // devtool: "source-map",
    /*resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },*/
    module: {
        rules: [
            //{ test: /\.(png|woff|woff2|eot|ttf|svg|css)$/, loader: 'url-loader?limit=100000' },
            /*{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader' //"awesome-typescript-loader"
            },*/
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader',
                        query: {
                            presets: ["react"]
                        }
                    }
                ]
            },
            // { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'/*, 'postcss-loader'*/] }, { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            /*{
                test:/\.css$/,
                exclude: /node_modules/,
                use: 'style-loader!css-loader' // short for style-loader!css-loader
                // use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader"}) // https://github.com/jrood/unexpected-char-bug-reproduced/blob/master/webpack.config.js#L19
            },*/
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }, // Deze lijn komt van: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
        ]
    },
    /*externals: { // Deze lijn komt van: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("styles.css")
    ],
};
