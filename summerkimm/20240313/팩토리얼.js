/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * 문제 풀이 포인트: for문
 */

function solution(n) {
  let answer = 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    if (result <= n) answer = i;
  }
  return answer;
}
