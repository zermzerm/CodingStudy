/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181921
 */
function solution(l, r) {
  const arr = [];
  for (let i = l; i <= r; i++) {
    if ([...String(i)].every((el) => el === "0" || el === "5")) arr.push(i);
  }
  return arr.length ? arr : [-1];
}
