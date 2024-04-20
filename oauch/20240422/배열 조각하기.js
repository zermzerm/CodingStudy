/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181893
 * 문제 이름 : 배열 조각하기
 */

function solution(arr, query) {
  query.map((val, i) =>
    i % 2 === 0 ? (arr = arr.slice(0, val + 1)) : (arr = arr.slice(val))
  );
  return arr;
}
