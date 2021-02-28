// find smallest positive integer that is NOT in array

/*
    N is an integer within the range [1..100,000];
    each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// THIS IS AN ASSUMPTION BUT DOES CODE NEED TO BE WRITTEN TO PASS TEST? >> NO!!!!!!!!!!!!!
// BUT in the real world you should handle ALL foreseeable possibilities ...


// TEST SCORES on codility: 66% OVERALL

// CORRECTIVENESS: 100% (even though #5 actually threw error on codility ... I guess the score
// only accounts for tests that suit ASSUMPTION: that elements would not be less/greater than million)
// *** SO TAKE ASSUMPTIONS AS LITERAL in codility .... (?)

// PERFORMANCE : 25% -- 
// TEST 1: OK
// TEST 2: TIMEOUT ERROR running time: 1.780 sec., time limit: 0.448 sec.
// TEST 3: TIMEOUT ERROR Killed. Hard limit reached: 6.000 sec.
// TEST 4: TIMEOUT ERROR running time: 1.144 sec., time limit: 0.432 sec.

// SO - PERHAPS finding the max element value would help?
// Like ... for (var i = 0; i < A.length; i++) { if(A[i] > sethigh) {setHigh = A[i] }} ...

// then the main: for (i = 1; i < 1000000; i++) ... could be replaced by: for (i = 1; i < setHigh; i++)
// this would reduce the number of iterations...

// NOTE: With the LIMIT var it still scrored 66% overall, with 25% performance ... so ??????????

// !! code was pasted into the codility window from the 'smallestIntNotInArray.js file ...
// ... no console.log messages (Do not include console in tests)

function solution(A) {
    var limit = 0;
    var counter = 0;
    for (var a = 0; a < A.length; a++) {
        if (A[a] > limit) {
            limit = A[a]
        }
    }
    console.log('limit ' + limit)

    // for (i = 1; i < 1000000; i++) {
    for (i = 1; i <= limit + 1; i++) {
        counter++;
        console.log('counter ' + counter)


        // THIS RETURNS UNDEFINED FOR #2 : [1, 2, 3]
    //     if(A[i-1] > -1000000 && A[i-1] < 1000000) {
    //         console.log(A[i -1]);
    //         if(!A.includes(i)) return i;
    //     }
    //   }
        
        // THIS WORKS FOR ALL SCENARIOS HOWEVER DOESNT ACCOUNT TO ELEMENT > MILLION
        if(!A.includes(i)) return i;
    }

}

console.log(solution( [1, 3, 6, 4, 1, 2] ))     //5
console.log(solution( [1, 2, 3] ))              //4
console.log(solution( [-1, -3] ))               //1
console.log(solution( [0, 1000000, 2, 3, 55,55433, 1] ))    //4
// BELOW THREW ERROR IN CODILITY ... NOT in this script ... see notes above ...
console.log(solution([-10000, -100000000000, -1, 0, 1, 2, -1] ))  //3
 