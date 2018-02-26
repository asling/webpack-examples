require('./test.js');
let Temp = require.ensure('./temp.js', function(){
    console.log('temp is loaded');
}, 'temp');
let temp = new Temp();
console.log('temp is resolved');