/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181893
 * 문제 이름 : 배열 조각하기
 * 문제 풀이 포인트: splice로 앞 또는 뒤 자르기
 * 나의 실수:
 */

function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    i % 2 === 0
      ? arr.splice(query[i] + 1, arr.length)
      : arr.splice(0, query[i]);
  }
  return arr;
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
