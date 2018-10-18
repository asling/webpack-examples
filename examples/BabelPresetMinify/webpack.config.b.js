/**
*
* BabelPresetMinify
*
*/

const webpack = require("webpack");
const path = require("path");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./index.js"),
	},
	output: {
		path: path.resolve(__dirname,"./dist"),
		filename: '[name].bundle.b.js',
	},
	module: {
		rules: [
			{
				test:/\.js$/,
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
	}
}