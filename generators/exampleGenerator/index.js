const folderExists = require("../folderExists");
const path = require("path");
const container = 'examples';
module.exports = {
	description: 'Add an example',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What should it be called',
			default: 'defaultExample',
			validate: (value) => {
				if((/.+/).test(value)){
					return folderExists(container)(value) ? 'A folder with this name already exists' : true;
				}
				return 'The name is required';
			}

		}
	],
	actions: [
		{
			type: 'add',
			path: `../${container}/{{properCase name}}/index.js`,
			templateFile: path.resolve(__dirname,'./index.js.hds'),
			abortOnFail: true,
		},
		{
			type: 'add',
			path: `../${container}/{{properCase name}}/webpack.config.js`,
			templateFile: path.resolve(__dirname,'./webpack.config.js.hds'),
			abortOnFail: true,
		}
	],
};