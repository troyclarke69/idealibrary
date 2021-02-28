// function solution(A) {
//     var limit = 0;
//     for (var a = 0; a < A.length; a++) {
//         if (A[a] > limit) {
//             limit = A[a]
//         }
//     }

//     for (i = 1; i <= limit + 1; i++) {
//         if(!A.includes(i)) return i;
//     }
// }

// ALT:

function solution(A) {
    var smallestInt = 1000000;
    var counter = 0;
    for (var a = 0; a < A.length; a++) {
        if (A[a] - 1 < smallestInt) {
            if (smallestInt > 0) {
                smallestInt = A[a] - 1
            }
        }
    }
    console.log(smallestInt)

    for (i = 1; i <= smallestInt; i++) {
        console.log(counter+1)
        if(i < smallestInt) return i;
    }
}

console.log(solution( [1, 3, 6, 4, 1, 2] ))     //5
// console.log(solution( [1, 2, 3] ))              //4
// console.log(solution( [4, 5, 6] ))              //1
// console.log(solution( [-1, -3] ))               //1
// console.log(solution( [0, 1000000, 2, 3, 55,55433, 1] ))    //4
// BELOW THREW ERROR IN CODILITY ... NOT in this script ... see notes above ...
// console.log(solution([-10000, -100000000000, -1, 0, 1, 2, -1] ))  //3
 