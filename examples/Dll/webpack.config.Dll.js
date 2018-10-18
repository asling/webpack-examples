/**
*
* Dll
*
*/

var path = require("path");
var webpack = require("webpack");
var root = __dirname;
module.exports = {
	mode: "production",
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		alpha: [path.join(root,"alpha"), path.join(root,"a")],
		beta: [path.join(root,"beta"), path.join(root,"b"), path.join(root,"c")]
	},
	output: {
		path: path.join(root,"dist4"),
		filename: "MyDll.[name].js",
		library: "MyLibrary",
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.DllPlugin({
			context: __dirname,
			path: path.join(root, "dist4", "[name]-manifest.json"),
			name: "MyLibrary",
		})
	]
};