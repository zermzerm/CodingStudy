/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181923
 * 문제 이름 : 수열과 구간 쿼리 2
 */

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
