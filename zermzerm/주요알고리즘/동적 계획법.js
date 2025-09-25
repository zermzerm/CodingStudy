// 피보나치 수열
function solution(n) {
  let dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}
