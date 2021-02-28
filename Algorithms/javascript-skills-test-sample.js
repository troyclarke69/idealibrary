/* 
  Execute this by running 'node javascript-skills-test-sample.js
*/

// expecting left ... and get Left!!!
var arr = [1, 10, 5, 1, 0, 6];

// equal ... expecting blank
// BUT GET BACK Left ...
// In C#, I get the result ... <blank>
// BUT I remove the '0' in C# ... not here tho,... and so both sides are equal in C#
// The question did not state that '0' was not a valid node ....
// so I am unsure what is really correct ?????
var arr6 = [1, 10, 5, 1, 0, 6 ];

// expecting Right - get Right!!!
var arr5 = [2, -1, 0, 4,-1, 3, 2, 9, -1, 2, -1 ];

// expecting right - get Right!!!
var arr4 = [-1, 1, 2, 3, 1, 5 ];

const solution = (arr) => {

  arr.splice(arr.indexOf(-1), 1); 
  // verify the array after the splice...
  // for(var j = 0; j < arr.length; j++)
  // {
  //   console.log(j, arr[j]);
  // }

  var left = 0;
  var right = 0;
  
  for(var i = 1; i < arr.length; i++){
  	if (i % 2 != 0){
      left += arr[i];
      // console.log(left);
    } else {
      right += arr[i];
      // console.log(right);
    }
  }
  // console.log('left' + left, 'right ' + right);
  if (left > right)
  {
    return console.log("Left");
  }
  else if (right > left)
  {
    return console.log("Right");
  }
  else
  {
    return console.log("");
  }
  
};

solution(arr6);