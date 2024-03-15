/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * 문제 풀이 포인트: for
 * 나의 실수: X
 */

function solution(n) {
  let 배열종민 = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) 배열종민.push(i);
  }
  return 배열종민;
}
