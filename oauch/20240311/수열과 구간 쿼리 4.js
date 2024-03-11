/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181922
 * 문제 이름 : 수열과 구간 쿼리 4
 * 금일 스터디원들 접근 방법 보고 해결 했습니다 🙂
 */

function solution(arr, queries) {
  queries.map(([s, e, k]) => {
    for (let i = s; s <= e; i++) {
      if (i % k === 0) ++arr[i];
    }
  });
  return arr;
}
