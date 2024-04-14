/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181858
 * 풀이 과정
 * 1. 중복 원소 제거하기
 * 2. 새로운 배열에 k만큼 넣기
 */

function solution(arr, k) {
  // 중복 원소 제거하기
  const newArr = arr.filter((val, idx) => arr.indexOf(val) === idx);

  // 배열에 k만큼 넣기
  let answer = [];
  for (let i = 0; i < k; i++) {
    newArr[i] === undefined ? answer.push(-1) : answer.push(newArr[i]);
  }
  return answer;
}
