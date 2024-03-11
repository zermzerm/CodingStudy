/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120848
 * 문제 풀이 포인트: 문제 이해
 * 나의 실수: 문제를 잘못 보고 다르게 풀었다가 돌아왔다..., i<=n까지여야되는데 i<n으로 해서 계속 오류났다...
 */

function solution(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
    if (sum === n) return i;
    if (sum > n) return i - 1;
  }
}
