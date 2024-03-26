/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120843
 * 문제 이름 : 공던지기
 * 문제 못 풀어서 풀이 봤습니다 황당 그 자체;;
 */

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}
