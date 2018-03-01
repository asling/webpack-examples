/**
*
* InlineStyle
*
*/

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/InlineStyle/index.js"),
	},
	output: {
		path: path.resolve(__dirname,"./examples/InlineStyle/dist"),
		filename: 'main.bundle.js',
	},
	module:{
		rules: [
			{
				test: /\.css$/,
				use:  ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				})
				// use: ['style-loader','css-loader'],
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.bundle.css'),
	]
}