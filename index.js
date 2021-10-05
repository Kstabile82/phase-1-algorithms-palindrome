function isPalindrome(word) {
  let wordArr = [...word];
  let forwardArr = []; 
  let backwardArr = []; 
  for (let i = wordArr.length-1; i >= 0; i--) {
    backwardArr.push(wordArr[i]); 
    }
    if (wordArr === backwardArr) {
      return true;
    }
    else {
      return false;
    }
//   forwardArr.map(idxA => {
//     backwardArr.map(idxB => {
//     if (idxA === idxB) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   })
// })
}

/* 
  Add your pseudocode here
  //convert string to array
  //make two empty arrays, frontArray and backArray
  //need two iterations, for loops, one starts at front one starts at end
  iterate through arrays, push each index into new array. 
  //conditional: if front array === back array, is true; else is false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
