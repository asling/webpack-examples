/**
*
* BeforeOptimze
*
*/

const webpack = require("webpack");
const path = require("path");
module.exports = {
	entry:{
		main: path.resolve(__dirname,"./examples/BeforeOptimze/index.js"),
		detail: path.resolve(__dirname,"./examples/BeforeOptimze/detail.js"),
		vendors: ['jquery'],
	},
	output: {
		path: path.resolve(__dirname,"./examples/BeforeOptimze/dist"),
		filename: '[name].bundle.[hash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
	},

	// optimization: {
	//     splitChunks: {
	//       chunks: 'async',
	//       minSize: 30000,
	//       maxSize: 0,
	//       minChunks: 1,
	//       maxAsyncRequests: 5,
	//       maxInitialRequests: 3,
	//       automaticNameDelimiter: '~',
	//       name: true,
	//       cacheGroups: {
	//         vendors: {
	//           test: /[\\/]node_modules[\\/]/,
	//           priority: -10
	//         },
	//         default: {
	//           minChunks: 2,
	//           priority: -20,
	//           reuseExistingChunk: true
	//         }
	//       }
	//     }
 //  	},
	
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