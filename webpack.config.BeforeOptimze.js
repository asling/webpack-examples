/**
*
* BeforeOptimze
*
*/

const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/BeforeOptimze/index.js"),
		detail: path.resolve(__dirname,"./examples/BeforeOptimze/detail.js"),
		// vendors: ['jquery'],
	},
	output: {
		path: path.resolve(__dirname,"./examples/BeforeOptimze/dist"),
		filename: '[name].bundle.[hash].js',
		// chunkFilename: '[name].[chunkhash].chunk.js',
	},
	
	// plugins: [
	// 	new CommonsChunkPlugin({
	// 		name: ['vendors','common'],
	// 		// filename: "commons.js",
	// 		// minChunks: 2,
	// 		// children: true,
	// 		// async: true,
	// 	}),
	// ]
}