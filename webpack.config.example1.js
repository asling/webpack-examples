const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./example1/main.js"),
	},
	output: {
		path: path.resolve(__dirname,"./example1/dist"),
		filename: '[name].bundle.js',
	},
	plugins: [
		new CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
		}),
	]
}