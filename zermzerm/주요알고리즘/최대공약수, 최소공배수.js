//N개의 최소공배수

// 유클리드 호제법
function solution(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

//하드코딩
// function solution(arr) {
//   let 답 = 1;
//   let 모든약수배열 = [];
//   arr.sort((a, b) => a - b);
//   let 모든약수종류배열 = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = [];
//     let tmpNumber = arr[i];
//     for (let j = 2; j <= arr[i]; j++) {
//       while (Number.isInteger(tmpNumber / j)) {
//         tmp.push(j);
//         tmpNumber /= j;
//         모든약수종류배열.add(j);
//       }
//       if (tmpNumber === 1) break;
//     }
//     모든약수배열.push(tmp);
//   }
//   let 모든약수종류 = [...모든약수종류배열];
//   let 약수개수배열 = [];
//   for (let i = 0; i < 모든약수종류.length; i++) {
//     let tmp = [];
//     for (let j = 0; j < 모든약수배열.length; j++) {
//       tmp.push(모든약수배열[j].filter((el) => el === 모든약수종류[i]).length);
//     }
//     약수개수배열.push(Math.max(...tmp));
//   }
//   for (let i = 0; i < 약수개수배열.length; i++) {
//     답 *= Math.pow(모든약수종류[i], 약수개수배열[i]);
//   }
//   return 답;
// }

console.log(solution([12, 32, 45, 67, 72]));
