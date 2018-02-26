const fs = require("fs");
const path = require("path");
// function foldersExists(folderName){
// 	const folders = fs.readdirSync(path.join(__dirname,`./../../${container}`));
// 	return folders.indexOf(folderName) > -1;
// }

module.exports = (container) => {
	return function (folderName){
		const folders = fs.readdirSync(path.join(__dirname,`./../${container}`));
		return folders.indexOf(folderName) > -1;
	}
};