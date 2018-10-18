var Common = require("./common");
var common = Common();
var Tmp = require.ensure("./tmp",function(){
	console.log("tmp loaded");
});

var tmp = new Tmp();

// var $  = require("jquery");
// // import $ from "jquery";

// $.get("localhost:8989",function(json){
// 	console.log(json);
// });


	require.ensure([],function(){
	var $=require('jquery')
		console.log($("body"));
	});

module.exports = function(){
	return 'this is a detail file';
}
