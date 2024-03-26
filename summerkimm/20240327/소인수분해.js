/**
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/120852
 * 문제 풀이 포인트: while문, 배열 원소 중복 제거 
 */

function solution(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      arr.push(i);
    }
  }

  return (answer = arr.filter((el, idx) => arr.indexOf(el) === idx));
}
