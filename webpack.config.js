const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: { main: './src/js/index.js',
            second: './src/js/clients.js',
            paper: './src/js/analytics.js',
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                {
                    loader: 'css-loader',
                    options: {importLoaders: 2}
                },
                    'postcss-loader']
            },

            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
               
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            esModule: false
                        }
                    },
                ]
            },

            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['main'],
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['second'],
            template: './src/clients.html', 
            filename: 'clients.html' 
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['paper'],
            template: './src/paper.html', 
            filename: 'paper.html' 
        }),


        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default'],
            },
            canPrint: true
        }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })

    ]


};

