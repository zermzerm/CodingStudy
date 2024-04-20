/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/181921
 * 문제 이름 : 배열 만들기 2
 */

function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    if (String(i).match(/^[05]+$/)) result.push(i);
  }

  return result.length === 0 ? [-1] : result;
}
