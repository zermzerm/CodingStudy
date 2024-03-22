/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/12982
 * 문제 풀이 포인트: while
 * 나의 실수: X
 */

const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  let idx = 0;
  while (budget >= d[idx]) budget -= d[idx++];
  return idx;
};
