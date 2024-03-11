/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * 문제 풀이 포인트:
 * 나의 실수: X
 */

const solution = (n) => {
  let factorialNum = 1;
  for (let i = 1; i <= 10; i++) {
    factorialNum *= i;
    if (n === factorialNum) return i;
    if (n < factorialNum) return i - 1;
  }
};
