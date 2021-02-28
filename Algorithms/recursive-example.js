// RECURSIVE vs. ITERATION example

// example: 5 x 4 x 3 x 2 x 1
const factorial = function(num) {  
    debugger;  
    var count = 0;
    if (num === 0 || num === 1) {
        return 1  
    } else {   
        count += 1; 
        return num * 
            factorial(num - 1)  
    }
    
};
console.log('recursive: ' + factorial(5));

const factorial_loop = (num) => {
    var count = 0;
    var result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
        count += 1;
    }
    return result;
}
console.log('loop ' + factorial_loop(5));

