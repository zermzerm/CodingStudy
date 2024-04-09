/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/147355
 * 문제 이름 : 크기가 작은 부분 문자열
 */

function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    const a = t.substr(i, p.length);
    if (a.length === p.length && a <= +p) count++;
  }
  return count;
}
