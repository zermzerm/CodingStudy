/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * 문제 풀이 과정 
 */

function solution(n) {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number++;

    while (number.toString().includes("3") || number % 3 === 0) {
      number++;
    }
  }
  return number;
}
