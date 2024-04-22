/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */

function solution(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 2];
    const b = result[i - 1];
    result.push((a + b) % 1234567);
  }
  return result[n];
}
