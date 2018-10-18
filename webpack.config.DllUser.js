/**
*
* DllUser
*
*/

const webpack = require("webpack");
const path = require("path");
var root = path.resolve(__dirname,"examples/DllUser/");
var dllPath = path.resolve(__dirname,"examples/Dll/");
console.log("__dirname",__dirname);
const dllObj = {
	// mode: "development",
	entry:{
		main: path.resolve(__dirname,"examples/DllUser/example.js"),
	},
	output: {
		path: path.resolve(__dirname,"examples/DllUser/dist2"),
		filename: 'output.js',
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require(path.join(dllPath,"dist3","alpha-manifest.json")) // eslint-disable-line
		}),
		// new webpack.DllReferencePlugin({
		// 	context: __dirname,
		// 	manifest: require(path.join(dllPath,"dist3","beta-manifest.json")), // eslint-disable-line
		// 	extensions: [".js", ".jsx"],
		// }),
		new webpack.DllReferencePlugin({
			scope: "beta",
			name: "MyLibrary",
			context: dllPath,
			manifest: require(path.join(dllPath,"dist4","beta-manifest.json")), // eslint-disable-line
			extensions: [".js", ".jsx"],
		})
	]
};
console.log("dllObj",dllObj);
module.exports = dllObj;