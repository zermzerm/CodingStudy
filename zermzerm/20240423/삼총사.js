/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/131705
 * 문제 이름 : 삼총사
 * 문제 풀이 포인트: 삼중 for문
 */

//다시 푼 코드
function solution(number) {
  let cnt = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
//예전에 푼 코드
// function solution(number) {
//   let cnt = 0;
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//       for (let k = j + 1; k < number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           cnt++;
//         }
//       }
//     }
//   }
//   return cnt;
// }
