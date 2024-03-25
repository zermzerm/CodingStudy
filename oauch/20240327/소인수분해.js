/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/120852
 * 문제 이름 : 소인수분해
 */

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1 && num;
}

function solution(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result.push(isPrime(i));
    }
  }
  return result.filter((val) => val !== false);
}
