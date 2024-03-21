/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * 문제 풀이 포인트: 짝수일 땐 반으로 나누고 홀수일땐 -1 하고 count++하기
 * 나의 실수: X
 */

//다시 푼 코드
function solution(n) {
  let cnt = 0;
  while (n !== 0) {
    if (n % 2 !== 0) {
      n--;
      cnt++;
    } else {
      n = n / 2;
    }
  }
  return cnt;
}

console.log(solution(5000));

//예전에 푼 코드
// function solution(n) {
//     var a = n;
//     var cnt = 1;
//     while (true) {
//       if (a == 1) {
//         return cnt;
//       }

//       if (a % 2 == 0) {
//         a = a / 2;
//       } else {
//         a = a - 1;
//         cnt++;
//       }
//     }
//   }
