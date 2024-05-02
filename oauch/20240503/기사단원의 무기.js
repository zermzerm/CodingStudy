/**
 * URL https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * 문제 이름 : 기사단원의 무기
 */

function solution(number, limit, power) {
  const array = [];
  for (let i = 1; i <= number; i++) {
    const count = measure(i);
    array.push(count);
  }
  return array.reduce(
    (arr, val) => (val > limit ? (arr += power) : (arr += val)),
    0
  );
}

function measure(n) {
  const answer = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      answer.push(i);
      if (n / i != i) answer.push(n / i);
    }
  }
  return answer.length;
}
