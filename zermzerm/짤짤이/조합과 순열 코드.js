// 조합
// function getCombinations(arr, n) {
//   let results = [];

//   if (n === 1) {
//     return arr.map((item) => [item]);
//   }

//   arr.forEach((current, index) => {
//     const smallerCombinations = getCombinations(arr.slice(index + 1), n - 1);
//     smallerCombinations.forEach((combination) => {
//       results.push([current, ...combination]);
//     });
//   });

//   return results;
// }

// const array = [1, 2, 3, 5, 7, 9];
// const n = 3;
// const combinations = getCombinations(array, n);
// console.log(combinations);

// 순열
function getPermutations(arr, n) {
  let results = [];

  if (n === 1) {
      return arr.map(item => [item]);
  }

  arr.forEach((current, index) => {
      const remaining = arr.slice(0, index).concat(arr.slice(index + 1));
      const smallerPermutations = getPermutations(remaining, n - 1);
      smallerPermutations.forEach(permutation => {
          results.push([current, ...permutation]);
      });
  });

  return results;
}

const array = [1, 2,3];
const n = 3;
const permutations = getPermutations(array, n);
console.log(permutations);

//순열2
// function permute(arr) {
//   let result = [];

//   const permuteHelper = (currentArr, remainingArr) => {
//       if (remainingArr.length === 0) {
//           result.push(currentArr);
//       } else {
//           let unique = new Set();
//           for (let i = 0; i < remainingArr.length; i++) {
//               if (!unique.has(remainingArr[i])) {
//                   unique.add(remainingArr[i]);
//                   permuteHelper(
//                       currentArr.concat(remainingArr[i]), 
//                       remainingArr.slice(0, i).concat(remainingArr.slice(i + 1))
//                   );
//               }
//           }
//       }
//   };

//   permuteHelper([], arr);
//   return result;
// }

// let permutations = permute([1, 1, 2]);
// console.log(permutations);