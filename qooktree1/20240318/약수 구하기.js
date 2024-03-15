/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * 문제 풀이 포인트: filter를 사용하여 truthy한 값만 filter
 * 나의 실수: X
 */

const solution = (n) =>
  Array.from(Array(n + 1), (_, i) => n % i === 0 && i).filter((x) => x);
