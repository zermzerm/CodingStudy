/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181858
 * 문제 풀이 포인트: Set 자료형
 * 나의 실수: X
 * [ 풀이 과정 ]
 * 1. 정수 배열 arr을 Set을 사용하여 중복된 정수를 제거한다.
 * 2. 완성된 배열의 길이가 k보다 작으면 destructing 문법을 사용해 -1로 채운다.
 */

const solution = (arr, k) => {
  const arrSet = [...new Set(arr)];
  return [
    ...arrSet.slice(0, k),
    ...Array(Math.max(k - arrSet.length, 0)).fill(-1),
  ];
};
