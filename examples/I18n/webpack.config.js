/**
*
* I18n
*
*/

const webpack = require("webpack");
const path = require("path");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/I18n/index.js"),
	},
	output: {
		path: path.resolve(__dirname,"./examples/I18n/dist"),
		filename: '[name].bundle.js',
	},
}