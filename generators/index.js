const fs = require("fs");
const path = require("path");
const exampleGenerator = require("./exampleGenerator");

module.exports = (plop) => {
	plop.setGenerator('example', exampleGenerator);
}