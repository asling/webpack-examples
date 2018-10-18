/**
*
* Hmr
*
*/

const _ = require("lodash");
// const printMe = require("./print.js");
import printMe from './print.js';
import a from './a.js';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

a();


let element = component();
document.body.appendChild(element);
if(module.hot){
	module.hot.accept("./print.js",function(){   //覆盖特定文件的hot reload
		console.log('Accepting the updated printMe module!');

		// printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
	});
    module.hot.accept("./a.js",function(){   //覆盖特定文件的hot reload
        console.log('Accepting the updated a module!');

        // printMe();
        // document.body.removeChild(element);
        // element = component();
        // document.body.appendChild(element);
    });
}
