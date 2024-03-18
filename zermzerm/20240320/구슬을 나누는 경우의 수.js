/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 문제 풀이 포인트: 공식?
 * 나의 실수: Hint 공식이 없었다면 어떻게 풀었을까..., 생각나지 않는다, 왜 그냥 올림이 아니라 반올림으로 해야될까?
 */

function solution(balls, share) {
  let n = 1,
    nMinusM = 1,
    m = 1;
  if (balls === share) return 1;
  for (let i = 1; i <= balls; i++) {
    n *= i;
  }
  for (let i = 1; i <= balls - share; i++) {
    nMinusM *= i;
  }
  for (let i = 1; i <= share; i++) {
    m *= i;
  }
  return Math.round(n / (nMinusM * m));
}
