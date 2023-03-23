// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const example1 = [1, 2, 2, 1];
const example2 = [2, 2];

////// first attempt ///////////
function intersect(arr1, arr2) {
  let longerArray = arr1.length >= arr2.length ? [...arr1] : [...arr2];
  let shorterArray = arr1.length < arr2.length ? [...arr1] : [...arr2];   ////// close but dupes in 1/no dupes in 2, is the breaking case
  let answerArray = [];
  for (let item of shorterArray) {
    if (longerArray.includes(item)) {
      answerArray.push(item);
    }
  } return answerArray
}

// console.log(intersect(example1, example2));

/////// second attempt ///////////
function whereTheyShare(arr1, arr2) {
  let longerArray = arr1.length >= arr2.length ? [...arr1] : [...arr2];
  let shorterArray = arr1.length < arr2.length ? [...arr1] : [...arr2];
  let answerArray = [];
  for (let i = longerArray.length - 1; i > 0; i--) {
    console.log(`longerArray[i]: ${longerArray[i]}`)
    console.log(`shorterArray[i]: ${shorterArray[i]}`)
      if (longerArray[i] === shorterArray[i]) {
        longerArray.splice(i, 1);
        let saveIt = shorterArray.splice(i, 1);
        answerArray.push(...saveIt);
        console.log(answerArray);
        console.log(longerArray);
        console.log(shorterArray);
        i = longerArray.length;
      }
  } return answerArray;
}

// console.log(whereTheyShare(example1, example2))

// console.log(example1.toString().includes(example2.toString())); this worked and I lol'd

///////// third attempt ////////////////
function overlapChecker(arr1, arr2) {
  let longerArray = arr1.length >= arr2.length ? [...arr1] : [...arr2];
  let shorterArray = arr1.length < arr2.length ? [...arr1] : [...arr2];
  let answerArray = [];

  for (let item of longerArray) {
    if (shorterArray.includes(item)) {
      answerArray.push(...shorterArray.splice(shorterArray.indexOf(item), 1))             /////BOOM!!! I was beating all around it and finally got there.
    }                                                                                     /////Top 3% in time complexity too. That feels good. Solved.
  } return answerArray;
}


console.log(overlapChecker(example1, example2))