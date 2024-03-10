/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181897
 * 문제 이름: 수열과 구간 쿼리 4
 * 문제 풀이 포인트: 문제 이해
 * 나의 실수: 문제 이해하는데 오래 걸렸다.
 */

function solution(arr, queries) {
  for (i = 0; i < queries.length; i++) {
    for (j = queries[i][0]; j < queries[i][1] + 1; j++) {
      if (j % queries[i][2] === 0) arr[j]++;
    }
  }
  return arr;
}
