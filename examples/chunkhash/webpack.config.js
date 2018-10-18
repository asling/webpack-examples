var path = require("path");
module.exports = {
	// mode: "development || "production",
	entry: {
		main: path.join(__dirname, "example"),
	},
	optimization: {
		runtimeChunk: true
	},
	output: {
		path: path.join(__dirname, "dist3"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].chunkhash.js"
	}
};
