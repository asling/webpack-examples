/**
*
* Dll
*
*/

var path = require("path");
var webpack = require("webpack");
var root = path.resolve(__dirname,"./examples/Dll/");
module.exports = {
	mode: "production",
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		alpha: [path.join(root,"alpha"), path.join(root,"a"), 'module'],
		beta: [path.join(root,"beta"), path.join(root,"b"), path.join(root,"c")]
	},
	output: {
		path: path.join(root,"dist3"),
		filename: "MyDll.[name].js",
		library: "[name]_[hash]",
		libraryTarget: 'var'
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(root, "dist3", "[name]-manifest.json"),
			name: "[name]_[hash]",
		})
	]
};