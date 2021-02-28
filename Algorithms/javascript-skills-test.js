//run with node another-js-skills-test.js
var arr = [-1, 1, 2, 3, 1, 5 ];

var i = arr.indexOf(-1,0);
console.log(i);

arr.splice(arr.indexOf(-1), 1); 
console.log(arr);
