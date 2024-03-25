/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181857
 * 문제 풀이 포인트: X
 * 나의 실수: X
 */

const solution = (arr) => {
  const arrLen = arr.length;
  let expandingArrLen;
  for (let i = 0; i <= 10; i++) {
    if (expandingArrLen >= arrLen) break;
    else expandingArrLen = 2 ** i;
  }
  return [...arr, ...Array(expandingArrLen - arrLen).fill(0)];
};
