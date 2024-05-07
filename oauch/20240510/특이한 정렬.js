/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120880
 * 문제 이름 : 특이한 정렬
 */

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);
}
