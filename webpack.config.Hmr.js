/**
*
* Hmr
*
*/

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const root = path.resolve(__dirname,"./examples/Hmr/");
module.exports = {
	entry:{
		// main: path.resolve(root,"./index.js"),
		main: "./examples/Hmr/index.js",
	},
	output: {
		path: path.resolve(root,"./dist"),
		filename: '[name].bundle.js',
		// path: "./examples/Hmr/dist",
	},
	devServer:{
		contentBase: path.resolve(root,"./dist"),
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
		}),
	 	new webpack.NamedModulesPlugin(),
	 	new webpack.HotModuleReplacementPlugin(),
	]
}