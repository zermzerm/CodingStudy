/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12945
 * 문제 풀이 포인트: DP
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. fibo(0), fibo(1)을 dp에 인자로 넣는다.
 * 2. tabulation 개념을 이용하여 반복문을 돌면서 dp 배열에 push한다.
 * 3. dp의 n번째 인자를 반환한다.
 */

const solution = (n) => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp.push((dp[i - 1] + dp[i - 2]) % 1234567);
  }
  return dp[n];
};
