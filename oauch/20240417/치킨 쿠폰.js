/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120884
 * 문제 이름 : 치킨 쿠폰
 */

function solution(chicken) {
  let service = 0;
  while (chicken >= 10) {
    service += Math.floor(chicken / 10);
    chicken = (chicken % 10) + Math.floor(chicken / 10);
  }
  return service;
}
