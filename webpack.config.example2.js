const path = require("path");
const moduleName = 'example2';
const root = path.resolve(__dirname,`./${moduleName}/`);
var HTMLPlugin = require(path.join(root,"plugin/HTMLPlugin")); 
module.exports = {
	entry:{
		index: path.join(root,'index.js'),
		detail: path.join(root,"detail.js"),
	},
	output:{
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,`./build/${moduleName}`),
	},
	plugins:[
          new HTMLPlugin()
    ],
};