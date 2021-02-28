// this finds the nth element of the fibonacci sequence

var startTime, endTime;

const start = () => {
    startTime = new Date();
    return startTime;
}

const end = () => {
    endTime = new Date();
    return endTime;

    // var timeDiff = endTime - startTime; //in ms
    // // strip the ms
    // timeDiff /= 1000;
    // // get seconds 
    // var seconds = Math.round(timeDiff);
    // console.log(seconds + " seconds");
    // return seconds;
  }

const fibonacci = function(num) {  
    if (num <= 1) {
        // console.log('a: ' + num);    
        return num  
    } else {    
        // console.log('b: ' + num);
        return fibonacci(num - 1) + fibonacci(num - 2)  
    }
}

var r = null;
try {
    // var s = start();
    r = fibonacci(50);
    // var e = end();

    // console.log(s, r, e);

}catch(err) {
    console.log(err);
}

console.log(r);
