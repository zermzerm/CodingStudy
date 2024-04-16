/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120878
 * 나의 실수
 * - "분모의 소인수가 2와 5만 존재해야된다" -> 2나 5로 나눴을 때 1이 되어야 한다. 
 */

function solution(a, b) {
  // 기약분수 만들기
  for (let i = 2; i < b + 1; i++) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }

  // 분모를 2나 5로 나누기
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;
  return b === 1 ? 1 : 2;
}
