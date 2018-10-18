const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
	entry: {
		main: path.join(__dirname, "example"),
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: './',
					}
				},
					"css-loader"
				]
			},
			{
				test: /\.png$/,
				use: [	
					{
						loader: 'file-loader',
					}
				],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].bundle.css"
		})
	]
}