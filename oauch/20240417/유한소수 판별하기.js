/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * 문제 이름 : 유한소수 판별하기
 */

function solution(a, b) {
  return (a / b).toString().length > 12 ? 2 : 1;
}
