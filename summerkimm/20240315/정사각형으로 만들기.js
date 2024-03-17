/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181830
 */

function solution(arr) {
  let row = arr.length;
  let col = arr[0].length;

  if (row > col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row - col; j++) {
        arr[i].push(0);
      }
    }
  } else if (row < col) {
    let zeroArr = new Array(arr[0].length).fill(0);
    for (let i = 0; i < col - row; i++) {
      arr.push(zeroArr);
    }
  }
  return arr;
}

// 처음 시도 -> 정확성 20 -> 이거를 살릴 수 없을까..?
// function solution(arr) {
//   if (arr.length === arr[0].length) return arr;
//   if (arr.length > arr[0].length) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i].push(0);
//     }
//   } else {
//     let zeroArr = new Array(arr[0].length).fill(0);
//     for (let i = 0; i <= arr[0].length - arr.length; i++) {
//       arr.push(zeroArr);
//     }
//   }
//   return arr;
// }
