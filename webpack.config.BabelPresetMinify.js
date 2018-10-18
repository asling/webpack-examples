/**
*
* BabelPresetMinify
*
*/

const webpack = require("webpack");
const path = require("path");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/BabelPresetMinify/index.js"),
	},
	output: {
		path: path.resolve(__dirname,"./examples/BabelPresetMinify/dist"),
		filename: '[name].bundle.js',
	},
}