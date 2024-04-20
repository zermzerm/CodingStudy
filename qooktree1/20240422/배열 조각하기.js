/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181893
 * 문제 풀이 포인트: slice
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. slice method를 사용하여 짝수 인덱스일 경우와 홀수 인덱스일경우를 비교하여 arr 배열을 조립한다.
 */

function solution(arr, query) {
  query.forEach((_, i) => {
    if (i % 2 === 0) arr = arr.slice(0, _ + 1);
    else arr = arr.slice(_);
  });
  return arr;
}
