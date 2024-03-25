/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120852
 * 문제 풀이 포인트: Set 자료형
 * 나의 실수: X
 */

const solution = (n) => {
  const answer = new Set();
  while (n > 1) {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        answer.add(i);
        n /= i;
        break;
      }
    }
  }
  return [...answer];
};
