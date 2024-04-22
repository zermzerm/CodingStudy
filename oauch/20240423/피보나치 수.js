/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * 문제 이름 : 피보나치 수
 */

function solution(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 2] + result[i - 1]) % 1234567;
  }
  return result[n];
}
