/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120897
 * 문제 이름 : 약수 구하기
 * 접근 방법 : for문 안에서 n % i === 0인 i가 약수가 된다!
 */

function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}
