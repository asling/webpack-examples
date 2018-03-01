const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const config = require("./webpack.config.Hmr");
const path = require("path");
const root = path.resolve(__dirname,"./examples/Hmr/");
const options = {
	contentBase: path.join(root,"dist"),
	hot: true,
	host: 'localhost',
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
console.log("compiler",compiler);
console.log("hooks",compiler.hooks);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});