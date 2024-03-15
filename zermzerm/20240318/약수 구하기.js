/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * 문제 풀이 포인트: for
 * 나의 실수: X
 */

function solution(n) {
  let 배열종민 = [];
  for (let 아이종민 = 1; 아이종민 <= n; 아이종민++) {
    if (n % 아이종민 === 0) 배열종민.push(아이종민);
  }
  return 배열종민;
}
