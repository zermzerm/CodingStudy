/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/132267
 */
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }
  return answer;
}
