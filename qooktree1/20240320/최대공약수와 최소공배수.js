/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12940
 * 문제 풀이 포인트: 최대공약수, 최소공배수 개념 알기
 * 나의 실수: X
 */

const solution = (n, m) => {
  let gcd = 1,
    lcm;
  for (let i = 1; i <= n * m; i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
    if (!lcm && i % n === 0 && i % m === 0) lcm = i;
  }
  return [gcd, lcm];
};
