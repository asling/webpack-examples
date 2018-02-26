/**
*
* EntriesOverlap
*
*/

const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/EntriesOverlap/index.js"),
		detail: path.resolve(__dirname,"./examples/EntriesOverlap/detail.js"),
		vendors: ['jquery'],
	},
	output: {
		path: path.resolve(__dirname,"./examples/EntriesOverlap/dist"),
		filename: '[name].bundle.[hash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
	},
	// module:{
	// 	loaders: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /node_modules/,
	// 			loader: 'babel-loader',

	// 		}
	// 	]
	// }
	plugins: [
		new CommonsChunkPlugin({
			name: ['vendors','common'],
			// filename: "commons.js",
			// minChunks: 2,
			// children: true,
			// async: true,
		}),
	]
}