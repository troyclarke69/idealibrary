// add to start and end of array
var arr = ['a', 'b', 'c', 'd'];

arr.push('end');
arr.unshift('start');

console.log(arr);

// es6 ... spread operator
arr = ['start', ...arr, 'end'];

// *** private variable in js ... w arrow funcs
// this DOES work .. HOWEVER DOES ERROR if ran more than
// once in browswer console -> 'secret already declared
// ... runs all times fine in VS tho, so WTF???
const secret = () => {
    var private = 'secret';
    return () => {
        return private;
    }
}
var getPrivate = secret();
console.log(getPrivate()); // does not have access to private
var getPrivateWorks = secret();
console.log(getPrivateWorks()); //


// *** rewrite this to function  *** THIS DOES WORK
// returns 'secret'
function secretVariable() {
    var private = 'secret';
    return function(){
        return private;
    }
}
var getPrivateVar = secretVariable();
console.log(getPrivateVar());

// *** this doesnt' work ...
function secretVariable() {
    var private = 'secret';
    return function(){
        return private;
    }
}
//var getPrivateVar = secretVariable();
console.log(secretVariable());


// *** compare with const or let 
// this code works with var
// DOES NOT WORK with const or let getPrivateVar()
function secretVariable() {
    const private = 'secret';
    return function(){
        return private;
    }
}
var getPrivateVar = secretVariable();
console.log(getPrivateVar());

// *** and again, does NOT work
// directly calling secretVariable function
function secretVariable() {
    let private = 'secret';
    return function(){
        return private;
    }
}
//var getPrivateVar = secretVariable();
console.log(secretVariable());


// THIS WORKS!
function secretVariable() {
    // const private = 'secret';    
    // return private;
    return 'secret';
}
//var getPrivateVar = secretVariable();
console.log(secretVariable());

// what is the output?
var num = 4;
console.log('none');
function outer(){
    var num = 2
    console.log('outer');
    function inner(){
        num++;
        var num = 3;
        console.log('inner');
        console.log(num);
    }
    inner();
}
outer();

// *** what is the output?
console.log(typeof typeof 1);
// string ...
// 'typeof 1' returns 'number'
// then ... typeof ('number') gives STRING

// *** What is the output?
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function(){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());     //undefined
console.log(hero.getSecretIdentity());  //John Doe
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());     //John Doe

        // calling x after definition 
        var x = 5; 
        document.write(x, "\n"); 
  
        // calling y after definition  
        let y = 10; 
        document.write(y, "\n"); 
  
        // calling var z before definition will return undefined 
        document.write(z, "\n"); 
        var z = 2; 
  
        // calling let a before definition will give error 
        document.write(a); 
        let a = 3; 

        //output: 5 10 undefined ERROR

        // other examples:
        /*
            Input:
            console.log(x);
            var x=5;
            console.log(x);
            Output:
            undefined
            5
            --------------
            Input:
            console.log(x);
            let x=5;
            console.log(x);
            Output:
            Error
         */

//
/*
i've been in multiples node.js/javascript interviews this year, my top 10 questions are:

1. What is the difference btw let and var?
    var is function scoped and let (& const) is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

2. What is prototype in javascript?
    prototype property allows you to add new properties & methods to object constructors: ex. declare a date var which inherits from the date.prototype (which inherits from the object prototype) ... to add new property you could add prop by var.prototype.new-prop = xxx...

3. What is a closure?
    A closure is a function having access to the parent scope, even after the parent function has closed.

    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. 
    
    In JavaScript, closures are created every time a function is created, at function creation time.

    ex.
    var add = (function () {
        var counter = 0;
        return function () {counter += 1; return counter}
    })();
    add();
    add();
    add();
    // the counter is now 3
    The variable add is assigned the return value of a self-invoking function.
    The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
    This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
    
4. Explain the event loop in node.js?
    The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. 

5. What is the meaning of the keyword this in javascript?
    every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called.

    function bike() {
        console.log(this.name);
    } 
    var name = "Ninja";
    var obj1 = { name: "Pulsar", bike: bike };
    var obj2 = { name: "Gixxer", bike: bike };
    bike();           // "Ninja"
    obj1.bike();      // "Pulsar"
    obj2.bike();      // "Gixxer"

6. What is node.js?
    JavaScript runtime environment that executes JavaScript code outside a web browser. lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 

7. What is the difference btw null and undefined?
    Null and Undefined are both data types in JavaScript. Undefined is a variable that has been declared but not assigned a value. Null as an assignment value. So you can assign the value null to any variable which basically means it's blank.

8. Explain settimeout in javascript?

9. What is the difference btw javascript and node.js?
    JS is a language and Node.js is a runtime environment - server-side js.

10. Explain what is promise and what is a callback?

    The main difference between callbacks and promises is that with callbacks you tell the executing function what to do when the asynchronous task completes, whereas with promises the executing function returns a special object to you (the promise) and then you tell the promise what to do when the asynchronous task completes.

*/

/* A pretty good js callback ex.
    function greeting(name) {
        alert('Hello ' + name);
    }
    function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
    }
    processUserInput(greeting);
*/
/* Another callback ex. (as simple as you can get)
    function calc(num, callback) {
        return callback(num);
    }
    var addTen = function(num) {
        return num + 10;
    }

    calc(3, addTen);
    // returns 13

*/