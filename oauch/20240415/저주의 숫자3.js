/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120871
 * 문제 이름 : 저주의 숫자 3
 */

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || String(i).includes("3")) n++;
  }
  return n;
}
