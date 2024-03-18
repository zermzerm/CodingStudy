/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120840
 * 문제 풀이 포인트: 팩토리얼
 * 나의 실수: balls와 share가 30이하의 자연수이기 때문에 number type을 BigInt로 줘야하는 것을 고려하지 못했다.
 */

const fact = (n) => {
  if (n <= 1) return BigInt(n);
  return BigInt(n) * fact(n - 1);
};

const solution = (balls, share) =>
  fact(balls) / (fact(Math.max(1, balls - share)) * fact(share));
