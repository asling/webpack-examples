var path = require("path");

module.exports = {
	// mode: "development" || "production",
	entry: {
		pageA: path.join(__dirname, 'pageA'),
		pageB: path.join(__dirname, 'pageB'),
		pageC: path.join(__dirname, 'pageC'),
		pageD: path.join(__dirname, 'pageD')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 3,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	output: {
		path: path.join(__dirname, "dist3"),
		filename: "[name].js"
	}
};
