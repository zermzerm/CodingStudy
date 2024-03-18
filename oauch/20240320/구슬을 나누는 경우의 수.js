/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 문제 이름 : 구슬을 나누느 경우의 수
 * 실수한 부분 : JS의 number 타입은 부동소수점도 포함 한다는 걸 깜빡하고 있었다.
 * 그래서 Math.floor() 함수를 이용해 소수점을 없앴다.
 */

function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

// 처음 시도한 케이스
// function factorial(num) {
//   return num === 0 ? 1 : num * factorial(num - 1);
// }

// function solution(balls, share) {
//   return factorial(balls) / (factorial(balls - share) * factorial(share));
// }
