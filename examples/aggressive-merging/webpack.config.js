var path = require("path");
var AggressiveMergingPlugin = require("webpack/lib/optimize/AggressiveMergingPlugin");
module.exports = {
	// mode: "development" || "production",
	entry: {
		pageA: path.join(__dirname, "pageA"),
		pageB: path.join(__dirname, "pageB"),
		pageC: path.join(__dirname, "pageC")
	},
	output: {
		path: path.join(__dirname, "dist2"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new AggressiveMergingPlugin({
			minSizeReduce: 1
		})
	],
	optimization: {
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
};
