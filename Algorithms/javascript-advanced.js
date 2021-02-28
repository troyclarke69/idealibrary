/* https://www.youtube.com/watch?v=NhYMlbKgQzU -- Jade Allen Cook */

/* FUNCTIONS
    ES5 & ES6
    Note: Not all browsers function allow ES6 so can use Babel to compile down to ES5
*/
/* *********************** START *********************** */

    // // ES5
    // function hello(name) {
    //     return 'Hello ' + name;
    // }
    // console.log(hello('ES5'));

    // // ES6
    // hello = (name) => {
    //     return 'Hello ' + name;
    // }
    // console.log(hello('ES6'));

/* *********************** END ********************************************** */

/* GLOBAL NAMESPACE - IIFE (Immediately Invoked Function Expression)
    wrapping everything in its own function like so ...
*/
/* *********************** START *********************** */

    // (function() {
    //     var name = "Bob";
    // })();

    // (function() {
    //     var name = "Bill";
    // })();

    //above will not result in error

/* *********************** END ********************************************** */

/* THIS.x & OBJECT CREATION & PROTOTYPES
    Trying to combine a few concepts ... must run blocks separately
*/
/* *********************** START *********************** */
    // ******************** start -- create a person factory
    // var person = function(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

    // var sue = new person('Sue', 22);
    // console.log(sue);
    // console.log(sue.hello());
    // ******************** end 

    // ******************** start
    // var person = function() {}
    // person.prototype.name = 'n/a';
    // person.prototype.age = 0;
    // person.prototype.hello = function() {
    //     return 'Hi ' + this.name;
    // }

    // var bob = new person();
    // console.log(bob);
    // console.log(bob.hello());
    // bob.name = 'bob';
    // console.log(bob.hello());
    // ******************** end

/* *********************** END ********************************************** */

/* THIS & ARROW FUNCTIONS v. REGULAR FUNCTIONS
    Trying to combine a few concepts ... must run blocks separately
*/
/* *********************** START *********************** */
   
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }
    
    //     printNameArrow() {
    //         setTimeout(() => {
    //             console.log('Arrow =>', this.name);
    //         },100);
    //     };

    //     printNameFunction() {
    //         setTimeout(function() {
    //             console.log('Function =>', this.name);
    //         },100);
    //     };
    // }
    // let person = new Person('Bob');
    // person.printNameArrow(); //prints Bob
    // person.printNameFunction(); //prints undefined

/* *********************** END ********************************************** */


/* CALL, APPLY & BIND
*/
/* *********************** START *********************** */

    // var myobj = {
    //     num: 2
    // }
    // var myfunc = function(add) {
    //     return this.num + add;
    // }
    // console.log(myfunc.call(myobj, 2));

    // var myfunc2 = function(n1, n2) {
    //     return this.num + n1 + n2;
    // }
    // console.log(myfunc2.apply(myobj, [2, 3]));

    // var mybind = {
    //     num1: 4,
    //     num2: 5
    // }
    // var myfunc3 = function() {
    //   return this.num1 + this.num2;
    // }
    // var added = myfunc3.bind(mybind);
    // console.log(added());

/* *********************** END ********************************************** */

/* CLASSES
*/
/* *********************** START *********************** */

    // class person {
    //     constructor(name, age) {
    //         this.name = name,
    //         this.age = age
    //     }
    //     hello() {
    //         return 'Hi ' + this.name;
    //     }   
    // }
    // var bob = new person('Bob', 22);
    // console.log(bob);
    // console.log(bob.hello());

/* *********************** END ********************************************** */


/* CLOSURES
    A closure is a function having access to the parent scope, 
    even after the parent function has closed.
*/
/* *********************** START *********************** */

    // var add = function(num1) {
    //     return function(num2) {
    //         return num1 + num2;
    //     }
    // }
    // var add2 = add(2);
    // console.log(add2(2));
    // var addTen = add(10);
    // console.log(addTen(5))

    // used this for the Balloons anim.
    /*
        var count = (function () {
            var counter = 0;
            return function () {
                counter += 1; 
                return counter;
            }
        })();

        var balloonsDeleted = count();
        console.log(balloonsDeleted);
    */

/* *********************** END ********************************************** */


/* CALLBACKS
    About as simple as an example can get ...
    callbacks tell the executing function what to do when the asynchronous task completes
    passes a function as a parameter to a function
*/
/* *********************** START *********************** */

    // function calc(num, callback) {
    //     return callback(num);
    // }
    // var addTen = function(num) {
    //     return num + 10;
    // }

    // var res = calc(3, addTen);
    // console.log(res);

    // ANOTHER EXAMPLE: RUN IN BROWSER CONSOLE *****************************************************
    // function greeting(name) {
    //     alert('Hello ' + name);
    // }
    // function processUserInput(callback) {
    //     var name = prompt('Please enter your name.');
    //     callback(name);
    // }
    // processUserInput(greeting);


    // SAME AS (WITHOUT CALLBACK) ...
    // function greeting(name) {
    //     alert('Hello ' + name);
    // }
    // function processUserInput() {
    //     var name = prompt('Please enter your name.');
    //     greeting(name);
    // }
    // processUserInput(greeting);


    // ANOTHER EX. => SIMULATING ASYNC CALL - Multi callbacks (callback hell)
    // console.log('start');

    // function login(email, pwd, callback) {
    //     setTimeout(() => {
    //         console.log('data arrived');
    //         callback({email, pwd});
    //     },3000);
    // }

    // function getUserInfo(email, callback) {
    //     setTimeout(() => {
    //         callback({firstName: 'Bob', lastName: 'Cob'});
    //     }, 2000);
    // }

    // const user = login('t@email.com', 'pass1', (user) => {
    //     console.log(user);
    //     getUserInfo(user.email, (info) => {
    //         console.log(info);
    //     })
    // });

    // console.log('finished');


    //FOR ABOVE, ASYNC/AWAIT IS BETTER SOLUTION (using promises in bg)
    function login(email, pwd) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('login done');
                resolve({email, pwd});
            },3000);
        })     
    }

    function getUserInfo(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('info arrived');
                resolve({firstName: 'Bob', lastName: 'Cob'});
            }, 2000);
        });     
    }

    // using async, BUT WRITING IT IN "SYNC" STYLE
    async function display() {
        try {
            const user = await login('b@e.c', '123');
            const info = await getUserInfo(user.email);
            console.log(user, info);
        }
        catch(err) {
            console.log(err);
        }
    };

    display();

/* *********************** END ********************************************** */

/* XMLHttpRequest & PROMISE
    VANILLA JAVASCRIPT -- NOT AJAX 
    NOTE: ONLY RUNS FROM BROWSER - CONSOLE!!
    WILL THROW ERROR: 'XMLHttpRequest not defined' HERE
*/
/* *********************** START *********************** */

// var mypromise = new Promise(function(res, rej) {
//     var request = new XMLHttpRequest();
//     request.open('get', 'https://randomuser.me/api/');
//     request.onload = res;
//     request.onerror = rej;
//     request.send();
// });
// mypromise.then(function(res) {
//     var data = res.target.response;
//     console.log(data);
// }).catch(function(rej) {
//     console.log('error ', rej);
// });

/* *********************** END ********************************************** */

/* https://www.youtube.com/watch?v=HcW5-P2SNec Kyle Simpson

    Other topics:

    1. nested scope (function scoping) IIFE
    2. hoisting
    3. closure ******** most important concept *********
    4. modules


*/
