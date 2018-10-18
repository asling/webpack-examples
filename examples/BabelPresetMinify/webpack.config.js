/**
*
* BabelPresetMinify
*
*/

const webpack = require("webpack");
const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./index.js"),
	},
	output: {
		path: path.resolve(__dirname,"./dist"),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exculde: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options:{
							presets: ['es2015'],
						}
					}
				],
			}
		]
	},
	plugins: [
    	new MinifyPlugin(minifyOpts, pluginOpts)
  ]
}