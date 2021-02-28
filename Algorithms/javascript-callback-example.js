// need to reference { alert, prompt } -- not js, Window DOM
// can run in browser console.

function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);