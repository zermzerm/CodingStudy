/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/82612
 * 문제 풀이 포인트: X
 * 나의 실수: X
 */

const solution = (price, money, count) =>
  Math.max(
    Array.from({ length: count }, (_, i) => (i + 1) * price).reduce(
      (a, b) => a + b,
      0
    ) - money,
    0
  );
