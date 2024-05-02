/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * 나의 실수 : 약수 구하는 과정에서 제곱근으로 구하면 시간 초과를 피할 수 있다. 
 */

function solution(number, limit, power) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        i / j !== j ? (count += 2) : (count += 1);
      }
    }
    count > limit ? (sum += power) : (sum += count);
  }
  return sum;
}

// function solution(number, limit, power) {
//   let sum = 0;

//   for(let i = 1; i <= number; i++) {
//       let count = 1;
//       for(let j = 1; j <= i / 2; j++) {
//           if(i % j === 0) {
//               count++;
//           }
//       }
//       count > limit ? sum += power : sum += count;
//   }
//   return sum;
// }
