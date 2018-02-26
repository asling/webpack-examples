webpackJsonp([3],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var Common = __webpack_require__(1);
var common = Common();
var Tmp = __webpack_require__.e/* require.ensure */(0).then((function(){
	console.log("tmp loaded");
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

var tmp = new Tmp();

var $  = __webpack_require__(0);
// import $ from "jquery";

$.get("localhost:8989",function(json){
	console.log(json);
});

module.exports = function(){
	return 'this is a detail file';
}


/***/ })

},[3]);