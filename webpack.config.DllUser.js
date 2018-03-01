/**
*
* DllUser
*
*/

const webpack = require("webpack");
const path = require("path");
var root = path.resolve(__dirname,"./examples/DllUser/");
var dllPath = path.resolve(__dirname,"./examples/Dll/");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/DllUser/example.js"),
	},
	output: {
		path: path.resolve(__dirname,"./examples/DllUser/dist"),
		filename: 'output.js',
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: dllPath,
			manifest: require(path.join(dllPath,"dist","alpha-manifest.json")) // eslint-disable-line
		}),
		new webpack.DllReferencePlugin({
			scope: "beta",
			manifest: require(path.join(dllPath,"dist","beta-manifest.json")), // eslint-disable-line
			extensions: [".js", ".jsx"]
		})
	]
}