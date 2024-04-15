/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * 문제 풀이 포인트: 최대공약수(GCD)
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 최대공약수를 구하여 분모를 나눈다.
 * 2. 분모가 2와 5로 나누어떨어지지 않을 때까지 2와 5로 나눈다.
 * 3. 만약 분모가 1이면 유한소수, 아니면 무한소수이다.
 */

const solution = (a, b) => {
  let gcd = 1; // 최대 공약수
  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  b = b / gcd;

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;
  return b === 1 ? 1 : 2;
};
