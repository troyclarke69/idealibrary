/*  RUN FROM BROWSER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    alert - is a browser component
*/
!function() {
    alert("Hello from IIFE!");
}();
/* Shows the alert "Hello from IIFE!"
  That’s a function that died immediately after it came to life.
*/

// Alt:
// void is basically forcing the function to be treated as an expression.
void function() {
    alert("Hello from IIFE!");
}();


// Variation 1
(function() {
    alert("I am an IIFE!");
}());

// Variation 2
(function() {
    alert("I am an IIFE, too!");
})();


var i = 99;
console.log(i);

var j = function() { return 99; };
console.log(j());
// can also write it as iffe ...
var k = (function() { return 99; })();
console.log(k);
console.log(k);
console.log((function() { return 99; })());

// just for reference - look at c# delegate example ... not really if similar?
/*
public delegate void MyDelegate(string msg); // declare a delegate

// set target method
MyDelegate del = new MyDelegate(MethodA);
// or 
MyDelegate del = MethodA; 
// or set lambda expression 
MyDelegate del = (string msg) =>  Console.WriteLine(msg);

// target method
static void MethodA(string message)
{
    Console.WriteLine(message);
}
*/


for (var i = 0; i < 5; i++) {
    (function IIFE() {
        var j = i;
        console.log(j);
    })();
}


var fibo = function fibonacci() {
    // you can use "fibonacci()" here as this function expression has a name.
    console.log('we are in fibonacci');
};
// fibonacci() here fails, but fibo() works.
fibo();


//closure
for (var i=1; i<=5; i++) {
    setTimeout(function() {
        console.log("i: " + i);
    }, i*1000);
}
