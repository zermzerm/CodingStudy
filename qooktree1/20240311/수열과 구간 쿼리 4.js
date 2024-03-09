/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181922
 * 문제 풀이 포인트: 문제 설명하는 순서대로 구현
 * 나의 실수: X
 */

const solution = (arr, queries) => {
  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  });
  return arr;
};
